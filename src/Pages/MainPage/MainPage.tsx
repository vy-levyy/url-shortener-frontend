import React from "react";
import { LinksList } from "../../components";
import { PageHeader } from "../../components/PageHeader";
import { UrlShortenerForm } from "../../components/UrlShortenerForm";
import { ILink } from "../../models";
import "./MainPage.style.scss";

const links: ILink[] = [
  {
    id: "1",
    source: "https://google.com/",
    target: "https://google.com/",
    clicks: 2,
  },
  {
    id: "2",
    source: "https://google.com/",
    target: "https://google.com/",
    clicks: 5,
  },
  {
    id: "3",
    source: "https://google.com/",
    target: "https://google.com/",
    clicks: 0,
  },
  {
    id: "4",
    source: "https://google.com/",
    target: "https://google.com/",
    clicks: 1,
  },
  {
    id: "5",
    source: "https://google.com/",
    target: "https://google.com/",
    clicks: 2,
  },
];

export const MainPage = () => {
  return (
    <div className="page">
      <PageHeader>Сокращатель</PageHeader>
      <main className="page__main">
        {/* <div className="page__main-content"> */}
          <section className="page__column">
            <UrlShortenerForm />
          </section>
          <section className="page__column">
            <LinksList links={links} className="page__list" />
          </section>
        {/* </div> */}
      </main>
    </div>
  );
};
