import React from "react";
import {
  Background,
  Content,
  Grid,
  Preview,
  Section,
  ProductLinkCard,
  ProductButton,
  H6,
  H4,
  A
} from "./Products.styled";

function Products() {
  return (
    <Section>
      <Grid>
        <ProductLinkCard to="/">
          <Background
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"})`
            }}
          />
          <Content>
            <Preview>
              <H6>Course</H6>
              <H4>JavaScript Fundamentals</H4>
              <A href="/">
                View all chapters {">"}
                <i className="fas fa-chevron-right" />
              </A>
              <ProductButton>more</ProductButton>
            </Preview>
          </Content>
        </ProductLinkCard>
        <a className="card" href="/">
          <div
            className="card__background"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"})`
            }}
          />
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a>
      </Grid>
    </Section>
  );
}
export default Products;
