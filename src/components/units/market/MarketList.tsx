import React, { useState } from 'react';
import { 
  Container, Title, BestProductsGrid, ProductCard, ProductImage, 
  ProductName, ProductSpec, ProductPrice, LikeCount, SearchBar, 
  SearchInput, DatePicker, SearchButton, TabContainer, Tab, 
  ProductList, ProductListItem, ProductInfo, ProductTags, Tag, 
  ProductActions, LikeButton, SellerInfo
} from './MarketList.styles';  

interface Product {
  id: string;
  name: string;
  spec: string;
  price: number;
  likes: number;
  image: string;
  tags: string[];
}

const BEST_PRODUCTS: Product[] = [
  { id: '1', name: '삼성전자 갤럭시탭A 10.1', spec: '2019 LTE 32GB', price: 240120, likes: 20, image: '/images/market/galaxy-tab.jpg', tags: ['삼성전자', '갤럭시탭', '갓성비'] },
  { id: '2', name: 'MSI MPG Z490 게이밍 엣지', spec: '인텔 CPU용', price: 274260, likes: 1, image: '/images/market/msi-mpg-z490.jpg', tags: [] },
  { id: '3', name: '레고 오버워치 레킹볼', spec: '게임보다 더 귀여운 실화?', price: 28370, likes: 0, image: '/images/market/lego-overwatch.jpg', tags: [] },
  { id: '4', name: 'ABKO HACKER K590', spec: '단하루 139만+GIFT', price: 24000, likes: 0, image: '/images/market/abko-hacker-k590.jpg', tags: [] },
];

export const BestProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'selling' | 'sold'>('selling');
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState<string>('');  // 검색어 상태 추가

  const handleLike = (productId: string) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const filteredProducts = BEST_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Title>베스트 상품</Title>
      
      <SearchBar>
        <SearchInput 
          placeholder="제품을 검색해주세요." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <DatePicker type="date" defaultValue="2020-12-02" />
        <span>~</span>
        <DatePicker type="date" defaultValue="2020-12-02" />
        <SearchButton>검색</SearchButton>
      </SearchBar>

      <BestProductsGrid>
        {filteredProducts.map((product) => ( 
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductSpec>{product.spec}</ProductSpec>
            <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            <LikeCount>❤️ {product.likes}</LikeCount>
          </ProductCard>
        ))}
      </BestProductsGrid>

      <TabContainer>
        <Tab active={activeTab === 'selling'} onClick={() => setActiveTab('selling')}>
          판매중상품
        </Tab>
        <Tab active={activeTab === 'sold'} onClick={() => setActiveTab('sold')}>
          판매된상품
        </Tab>
      </TabContainer>

      <ProductList>
        {filteredProducts.map((product) => (
          <ProductListItem key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductSpec>{product.spec}</ProductSpec>
              <ProductTags>
                {product.tags.map((tag) => (
                  <Tag key={tag}>#{tag}</Tag>
                ))}
              </ProductTags>
            </ProductInfo>
            <ProductActions>
              <LikeButton onClick={() => handleLike(product.id)}>
                {likedProducts.has(product.id) ? '❤️' : '🤍'}
              </LikeButton>
              <SellerInfo>판매자 {product.likes}</SellerInfo>
              <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            </ProductActions>
          </ProductListItem>
        ))}
      </ProductList>
    </Container>
  );
};

export default BestProducts;
