/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import { LinksList, PaginationLinksList } from "../../components";
import { PageHeader } from "../../components/PageHeader";
import { UrlShortenerForm } from "../../components/UrlShortenerForm";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchShortUrls } from "../../redux/thunks";
import "./MainPage.style.scss";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.urls.data);
  const pagination = useAppSelector((state) => state.urls.pagination);

  const myLinks = useAppSelector((state) => state.urls.addedUrls);

  const page = pagination?.page || 1;
  const totalPages = pagination?.totalPages || 1;

  useEffect(() => {
    dispatch(fetchShortUrls({ page: 1 }));
  }, []);

  const onPageClick = useCallback((page: number) => {
    dispatch(fetchShortUrls({ page }));
  }, []);

  return (
    <div className="main-page">
      <PageHeader>Сокращатель</PageHeader>
      <main className="main-page__main">
        <section className="main-page__column">
          <UrlShortenerForm className="main-page__url-form" />
          {myLinks.length > 0 && (
            <div className="main-page__my-links-list-container">
              <LinksList links={myLinks} header="Мои ссылки" numByIndex />
            </div>
          )}
        </section>
        <section className="main-page__column">
          <PaginationLinksList
            links={links}
            header="Список ссылок"
            page={page}
            totalPages={totalPages}
            onClick={onPageClick}
          />
        </section>
      </main>
    </div>
  );
};
