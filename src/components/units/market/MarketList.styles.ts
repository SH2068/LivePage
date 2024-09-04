import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const BestProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  background-color: #f9f9f9;
  padding: 20px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 200px;  // 최대 높이 설정
  height: auto;
  object-fit: cover;  // 이미지 비율 유지하며 잘라내기
`;


export const ProductName = styled.div`
  font-weight: bold;
  margin: 10px 0;
  font-size: 16px;
`;

export const ProductSpec = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;

export const LikeCount = styled.div`
  color: #ff9800;
  font-size: 14px;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
`;

export const DatePicker = styled.input`
  padding: 5px;
  margin: 0 5px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Tab = styled.div<{ active: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#fff' : '#f0f0f0')};
  border: 1px solid #ddd;
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #ddd')};
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProductListItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
`;

export const ProductTags = styled.div`
  margin-top: 5px;
`;

export const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 2px 5px;
  margin-right: 5px;
  font-size: 12px;
  border-radius: 3px;
`;

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;
  color: #ff9800;
`;

export const SellerInfo = styled.div`
  font-size: 12px;
  color: #666;
`;
