import styled from 'styled-components';
import { Item} from '../interfaces/types.ts';

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

const HyruleCompendium: React.FC<HyruleCompendiumProps> = ({ items, category }) => {
    return (
        <ItemsContainer>
            {items.map((item) => (
                <ItemCard key={item.id}>
                    <ItemName>{item.name}</ItemName>
                    <ItemImage src={item.image} alt={item.name} />
                    <ItemDescription>{item.description}</ItemDescription>

                    {/* Render fields based on category */}
                    {category === 'monsters' || category === 'treasure' ? (
                        <>
                            <p>
                                <strong>Common Locations:</strong>{' '}
                                {item.common_locations?.join(', ') || 'Unknown'}
                            </p>
                            <p>
                                <strong>Drops:</strong> {item.drops?.join(', ') || 'None'}
                            </p>
                        </>
                    ) : null}

                    {category === 'equipment' ? (
                        <>
                            <p>
                                <strong>Attack:</strong> {(item as any).attack || 'N/A'}
                            </p>
                            <p>
                                <strong>Defense:</strong> {(item as any).defense || 'N/A'}
                            </p>
                        </>
                    ) : null}

                    {category === 'materials' || category === 'creatures' ? (
                        <>
                            <p>
                                <strong>Cooking Effect:</strong> {(item as any).cooking_effect || 'None'}
                            </p>
                            <p>
                                <strong>Hearts Recovered:</strong> {(item as any).hearts_recovered || 0}
                            </p>
                        </>
                    ) : null}
                </ItemCard>
            ))}

        </ItemsContainer>
    );
};

export default HyruleCompendium;