import React from "react";
import {
  Circle,
  Container,
  Cover,
  TB,
  TD,
  Form,
  Input,
  SearchButton,
  Span
} from "./Search.styled";

function Search() {
  return (
    <Container>
      <Form method="get" action="">
        <TB>
          <TD>
            <Input type="text" placeholder="Search" required />
          </TD>
          <TD>
            <Cover>
              <SearchButton>
                <Circle />
                <Span />
              </SearchButton>
            </Cover>
          </TD>
        </TB>
      </Form>
    </Container>
  );
}
export default Search;
