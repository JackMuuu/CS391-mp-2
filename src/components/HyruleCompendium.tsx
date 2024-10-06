import styled from 'styled-components';
import {
    Item,
    isMonster,
    isEquipment,
    isMaterialOrCreature,
    isMaterial,
    isCreature,
    isTreasure,
} from '../interfaces/types.ts';

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemCard = styled.div`
  border: 2px solid #444;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  background-color: #f0f0f0;
  text-align: center;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const ItemName = styled.h2`
  color: #333;
  text-transform: capitalize;
`;

const ItemDescription = styled.p`
  color: #666;
`;

interface HyruleCompendiumProps {
    items: Item[];
    category: string;
}

const HyruleCompendium: React.FC<HyruleCompendiumProps> = ({ items }) => {
    return (
        <ItemsContainer>
            {items.map((item) => (
                <ItemCard key={item.id}>
                    <ItemName>{item.name}</ItemName>
                    <ItemImage src={item.image} alt={item.name} />
                    <ItemDescription>{item.description}</ItemDescription>

                    {/* Monsters and Treasure */}
                    {(isMonster(item) || isTreasure(item)) && (
                        <>
                            <p>
                                <strong>Common Locations:</strong>{' '}
                                {item.common_locations?.join(', ') || 'Unknown'}
                            </p>
                            <p>
                                <strong>Drops:</strong> {item.drops?.join(', ') || 'None'}
                            </p>
                        </>
                    )}

                    {/* Equipment */}
                    {isEquipment(item) && (
                        <>
                            <p>
                                <strong>Attack:</strong> {item.attack || 'N/A'}
                            </p>
                            <p>
                                <strong>Defense:</strong> {item.defense || 'N/A'}
                            </p>
                        </>
                    )}

                    {/* Materials and Creatures */}
                    {isMaterialOrCreature(item) && (
                        <>
                            <p>
                                <strong>Cooking Effect:</strong> {item.cooking_effect || 'None'}
                            </p>
                            <p>
                                <strong>Hearts Recovered:</strong> {item.hearts_recovered || 0}
                            </p>
                        </>
                    )}

                    {/* Common Locations for Materials and Creatures */}
                    {(isMaterial(item) || isCreature(item)) && item.common_locations && (
                        <p>
                            <strong>Common Locations:</strong>{' '}
                            {item.common_locations.join(', ') || 'Unknown'}
                        </p>
                    )}
                </ItemCard>
            ))}
        </ItemsContainer>
    );
};

export default HyruleCompendium;