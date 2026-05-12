import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type NodeSpec = {
  label: string;
  subtitle: string;
  x: number;
  y: number;
  color: string;
  icon: string;
  start: number;
};

const nodes: NodeSpec[] = [
  {label: 'Trigger', subtitle: '新信息进入', x: 170, y: 420, color: '#2f80ed', icon: '⚡', start: 18},
  {label: 'Read Airtable', subtitle: '读取任务状态', x: 455, y: 275, color: '#18a058', icon: '▦', start: 66},
  {label: 'Code Decision', subtitle: '判断下一步', x: 760, y: 420, color: '#7c3aed', icon: '</>', start: 114},
  {label: 'Feishu Push', subtitle: '同步给人', x: 1085, y: 275, color: '#0ea5e9', icon: '✉', start: 168},
  {label: 'Dashboard', subtitle: '可视化进度', x: 1395, y: 420, color: '#f59e0b', icon: '▣', start: 222},
];

const messages = [
  {frame: 30, title: 'Trigger received', detail: '微信/飞书/定时器唤醒自动化'},
  {frame: 78, title: 'State loaded', detail: '从 Airtable 拉取任务、证据、阻塞项'},
  {frame: 130, title: 'Decision made', detail: 'Code 节点判断：继续执行 / 升级 / 等待'},
  {frame: 182, title: 'Human notified', detail: 'Feishu 推送关键变更，不刷屏'},
  {frame: 236, title: 'Dashboard updated', detail: '状态回写，进度对齐'},
  {frame: 306, title: 'Loop complete', detail: '一次自动化闭环完成'},
];

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const NodeCard: React.FC<{node: NodeSpec; index: number}> = ({node, index}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = spring({frame: frame - node.start, fps, config: {damping: 16, stiffness: 120}});
  const active = clamp01(interpolate(frame, [node.start, node.start + 16, node.start + 66, node.start + 88], [0, 1, 1, 0.45], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const scale = 0.82 + pop * 0.18 + active * 0.035;

  return (
    <div style={{position: 'absolute', left: node.x, top: node.y, width: 235, transform: `scale(${scale})`, transformOrigin: 'center', opacity: pop}}>
      <div style={{borderRadius: 28, padding: 22, background: 'rgba(255,255,255,0.88)', border: `3px solid ${active > 0.6 ? node.color : 'rgba(15,23,42,0.09)'}`, boxShadow: active > 0.6 ? `0 24px 70px ${node.color}44` : '0 18px 50px rgba(15,23,42,0.14)'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <div style={{width: 58, height: 58, borderRadius: 18, background: node.color, color: 'white', display: 'grid', placeItems: 'center', fontSize: 30, fontWeight: 800}}>{node.icon}</div>
          <div style={{fontSize: 22, fontWeight: 900, color: '#0f172a'}}>{node.label}</div>
        </div>
        <div style={{marginTop: 16, fontSize: 18, color: '#475569', fontWeight: 700}}>{node.subtitle}</div>
        <div style={{marginTop: 18, height: 8, borderRadius: 999, background: '#e2e8f0', overflow: 'hidden'}}>
          <div style={{height: '100%', width: `${active * 100}%`, background: node.color, borderRadius: 999}} />
        </div>
      </div>
      <div style={{marginTop: 14, textAlign: 'center', fontSize: 16, fontWeight: 800, color: '#64748b'}}>STEP {index + 1}</div>
    </div>
  );
};

const Connector: React.FC<{from: NodeSpec; to: NodeSpec}> = ({from, to}) => {
  const frame = useCurrentFrame();
  const start = from.start + 24;
  const progress = clamp01(interpolate(frame, [start, start + 42], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const x1 = from.x + 235;
  const y1 = from.y + 75;
  const x2 = to.x;
  const y2 = to.y + 75;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  return (
    <div style={{position: 'absolute', left: x1, top: y1, width: len, height: 8, transform: `rotate(${angle}deg)`, transformOrigin: 'left center', borderRadius: 999, background: 'rgba(148,163,184,0.25)', overflow: 'hidden'}}>
      <div style={{width: `${progress * 100}%`, height: '100%', borderRadius: 999, background: 'linear-gradient(90deg,#60a5fa,#22c55e,#f59e0b)', boxShadow: '0 0 24px rgba(59,130,246,0.75)'}} />
    </div>
  );
};

const DataPacket: React.FC<{from: NodeSpec; to: NodeSpec; start: number; text: string}> = ({from, to, start, text}) => {
  const frame = useCurrentFrame();
  const p = clamp01(interpolate(frame, [start, start + 42], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const opacity = interpolate(p, [0, 0.08, 0.9, 1], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const x = interpolate(p, [0, 1], [from.x + 205, to.x + 25]);
  const y = interpolate(p, [0, 1], [from.y + 36, to.y + 36]);
  return <div style={{position: 'absolute', left: x, top: y, opacity, padding: '10px 16px', borderRadius: 18, background: '#0f172a', color: 'white', fontSize: 16, fontWeight: 900, boxShadow: '0 16px 40px rgba(15,23,42,0.25)'}}>{text}</div>;
};

export const N8nPipelinePrototype: React.FC = () => {
  const frame = useCurrentFrame();
  const bgShift = interpolate(frame, [0, 420], [0, 1]);
  const current = [...messages].reverse().find((m) => frame >= m.frame) ?? messages[0];
  const titleIn = spring({frame, fps: 30, config: {damping: 18}});
  const complete = spring({frame: frame - 300, fps: 30, config: {damping: 14}});

  return (
    <AbsoluteFill style={{fontFamily: 'Inter, PingFang SC, Helvetica, Arial, sans-serif', background: `linear-gradient(${120 + bgShift * 30}deg,#f8fbff 0%,#eef6ff 42%,#f7f5ff 100%)`, overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(47,128,237,0.16), transparent 28%), radial-gradient(circle at 85% 22%, rgba(124,58,237,0.13), transparent 28%), radial-gradient(circle at 70% 85%, rgba(34,197,94,0.13), transparent 28%)'}} />
      <div style={{position: 'absolute', left: 92, top: 70, opacity: titleIn, transform: `translateY(${(1 - titleIn) * 24}px)`}}>
        <div style={{fontSize: 30, color: '#2563eb', fontWeight: 900, letterSpacing: 2}}>AUTO STACK SHARING / VIDEO PROTOTYPE</div>
        <div style={{marginTop: 14, fontSize: 68, lineHeight: 1.05, fontWeight: 950, color: '#0f172a'}}>动态 n8n 自动化闭环</div>
        <div style={{marginTop: 18, fontSize: 28, color: '#475569', fontWeight: 750}}>Trigger → Airtable → Code → Feishu → Dashboard</div>
      </div>

      {nodes.slice(0, -1).map((node, i) => <Connector key={`c-${i}`} from={node} to={nodes[i + 1]} />)}
      {nodes.map((node, i) => <NodeCard key={node.label} node={node} index={i} />)}
      {nodes.slice(0, -1).map((node, i) => <DataPacket key={`p-${i}`} from={node} to={nodes[i + 1]} start={node.start + 26} text={['event','tasks','decision','update'][i]} />)}

      <div style={{position: 'absolute', left: 92, bottom: 86, width: 770, padding: '28px 34px', borderRadius: 34, background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(148,163,184,0.22)', boxShadow: '0 20px 80px rgba(15,23,42,0.12)'}}>
        <div style={{fontSize: 22, color: '#2563eb', fontWeight: 950}}>{current.title}</div>
        <div style={{marginTop: 10, fontSize: 34, color: '#0f172a', fontWeight: 900}}>{current.detail}</div>
      </div>

      <div style={{position: 'absolute', right: 95, bottom: 84, width: 390, transform: `scale(${0.72 + complete * 0.28})`, opacity: complete}}>
        <div style={{borderRadius: 40, padding: 30, background: 'linear-gradient(135deg,#0f172a,#1e3a8a)', color: 'white', boxShadow: '0 28px 90px rgba(30,58,138,0.36)'}}>
          <div style={{fontSize: 52, fontWeight: 950}}>Loop Complete</div>
          <div style={{marginTop: 12, fontSize: 24, color: '#bfdbfe', fontWeight: 800}}>状态更新 / 人已知情 / 下一步明确</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
