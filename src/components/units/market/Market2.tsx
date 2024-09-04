// import React, { useState } from 'react';
// import { Container, ProductImage, ProductDetails, Price, Description, MapContainer, CommentsSection, Comment, CommentInput, SubmitButton } from './ProductDetail.styles';

// const ProductDetailPage: React.FC = () => {
//   const [comments, setComments] = useState<string[]>([]);
//   const [commentInput, setCommentInput] = useState<string>("");

//   const handleCommentSubmit = () => {
//     if (commentInput.trim()) {
//       setComments([...comments, commentInput]);
//       setCommentInput("");
//     }
//   };

//   return (
//     <Container>
//       <ProductImage src="/placeholder.jpg" alt="Product Image" />
//       <ProductDetails>
//         <h1>삼성전자 갤럭시탭A 10.1</h1>
//         <Price>240,120원</Price>
//         <Description>
//           화면이 크고 선명한 갤럭시탭A입니다. 박스는 없습니다. 배송비는 별도입니다.
//         </Description>
//       </ProductDetails>

//       <MapContainer>
//         {/*  구글 맵 컴포넌트 사용 */}
//       </MapContainer>

//       <CommentsSection>
//         <h2>문의하기</h2>
//         <CommentInput 
//           value={commentInput}
//           onChange={(e) => setCommentInput(e.target.value)}
//           placeholder="문의사항을 입력하세요."
//         />
//         <SubmitButton onClick={handleCommentSubmit}>문의하기</SubmitButton>

//         {comments.map((comment, index) => (
//           <Comment key={index}>{comment}</Comment>
//         ))}
//       </CommentsSection>
//     </Container>
//   );
// };

// export default ProductDetailPage;
