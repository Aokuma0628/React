import { Component, ReactElement } from 'react';
import CharacterList, { Character } from './CharacterList2';
import './App.css';


// クラスコンポーネント
class App2 extends Component {
  characters: Character[] = [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '流川楓',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: '宮城りょーた',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: '三井寿',
      grade: 3,
      height: 178,
    },
    {
      id: 5,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    },
  ];

  render(): ReactElement {
    return (
      <div className='container'>
        <header>
          <h1>『SLUM DUNK』登場人物</h1>
        </header>
        <CharacterList school='湘北高校' characters={this.characters} />
      </div>
    );
  };
};

export default App2;