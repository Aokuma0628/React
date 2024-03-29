import { Component, ReactElement } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export type Character = {
  id:       number;
  name:     string;
  grade:    number;
  height?:  number;
};

type Props = {
  school:     string;
  characters: Character[];
};

class CharacterList2 extends Component<Props> {
  render(): ReactElement {
    const { school, characters } = this.props;

    return (
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {characters.map((character) => (
            <Item /* key={character.id} */>
              <Icon name='user circle' size='huge' />
              <Item.Content>
                <Item.Header as='a'>{character.name}</Item.Header>
                <Item.Meta>{character.grade}年生</Item.Meta>
                <Item.Meta>{character.height ? character.height : '???'}cm</Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
  }
};

export default CharacterList2;