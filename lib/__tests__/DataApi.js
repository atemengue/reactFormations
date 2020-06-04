import StateApi from "state-api";
import { data } from "../testData";

const store = new StateApi(data);

describe("  StateApi", () => {
  it("exposes articles as an object", () => {
    const articles = store.getState().articles;
    const articledId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articledId);
    expect(articles[articledId].title).toBe(articleTitle);
  });

  it("exposes authors as an object", () => {
    const authors = store.getState().authors;
    const authorId = data.authors[0].id;
    const authorsFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorsFirstName);
  });
});
