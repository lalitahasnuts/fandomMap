import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import graphData from '../data/characters.json';

export default function Characters() {
  const [nodes, setNodes] = useState(graphData.nodes);
  const [edges, setEdges] = useState(graphData.edges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div style={{ width: '100%', height: '700px', border: '1px solid #2e303a', borderRadius: 12 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        colorMode="dark"
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}