import { useState } from 'react';

type SignalKey = 'search' | 'revision' | 'operation' | 'policy';

type DiagramItem = {
  key: SignalKey;
  signal: string;
  structure: string;
  product: string;
};

const diagramItems: DiagramItem[] = [
  { key: 'search', signal: '탐색 실패', structure: '문제 정의', product: '사용자 흐름' },
  { key: 'revision', signal: '반복 수정', structure: '사용자 조건', product: '제품 요구사항' },
  { key: 'operation', signal: '운영 병목', structure: '예외 케이스', product: '정책과 상태값' },
  { key: 'policy', signal: '불명확한 정책', structure: '우선순위', product: '실험과 지표' },
];

export function SignalDiagram() {
  const [activeKey, setActiveKey] = useState<SignalKey>('search');

  return (
    <aside className="signal-diagram" aria-labelledby="signal-title">
      <div className="diagram-heading">
        <p className="eyebrow">SIGNAL → STRUCTURE → PRODUCT</p>
        <h2 id="signal-title">문제의 신호를 제품 언어로 번역합니다.</h2>
      </div>
      <div className="diagram-grid">
        <DiagramColumn title="SIGNAL" items={diagramItems} activeKey={activeKey} valueKey="signal" onActive={setActiveKey} />
        <DiagramColumn title="STRUCTURE" items={diagramItems} activeKey={activeKey} valueKey="structure" onActive={setActiveKey} />
        <DiagramColumn title="PRODUCT" items={diagramItems} activeKey={activeKey} valueKey="product" onActive={setActiveKey} />
        <svg className="diagram-lines" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
          {diagramItems.map((item, index) => {
            const y = 16 + index * 22;
            return (
              <g className={activeKey === item.key ? 'is-active' : undefined} key={item.key}>
                <path d={`M 29 ${y} C 39 ${y}, 43 ${y}, 50 ${y}`} />
                <path d={`M 63 ${y} C 73 ${y}, 77 ${y}, 84 ${y}`} />
              </g>
            );
          })}
        </svg>
      </div>
    </aside>
  );
}

type DiagramColumnProps = {
  title: string;
  items: DiagramItem[];
  activeKey: SignalKey;
  valueKey: 'signal' | 'structure' | 'product';
  onActive: (key: SignalKey) => void;
};

function DiagramColumn({ title, items, activeKey, valueKey, onActive }: DiagramColumnProps) {
  return (
    <div className="diagram-column">
      <span>{title}</span>
      {items.map((item) => (
        <button
          className={activeKey === item.key ? 'diagram-node is-active' : 'diagram-node'}
          key={`${title}-${item.key}`}
          type="button"
          onFocus={() => onActive(item.key)}
          onMouseEnter={() => onActive(item.key)}
          aria-pressed={activeKey === item.key}
        >
          {item[valueKey]}
        </button>
      ))}
    </div>
  );
}
