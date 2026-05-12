# Remotion prototype — n8n dynamic pipeline

This is the first true dynamic video prototype for the May 15 sharing video.

Composition: `N8nPipelinePrototype`

Run locally:

```bash
npm install
npm run remotion:studio
npm run remotion:still
npm run remotion:render
```

Output targets:
- `sharing-video-20260515/remotion/out/n8n-pipeline-frame.png`
- `sharing-video-20260515/remotion/out/n8n-pipeline-prototype.mp4`

Creative direction:
- Replace static slide/page feeling with a visible automation loop.
- Nodes light up in sequence: Trigger → Airtable → Code Decision → Feishu Push → Dashboard.
- Data packets move between nodes.
- Final state is “Loop Complete”: state updated, human notified, next step clear.
