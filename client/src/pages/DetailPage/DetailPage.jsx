import { useLocation } from 'react-router-dom';
import { useGetRestaurantQuery } from 'services/businesses';
import { Location, Footer, DetailBanner } from 'layouts';
import { Reviews } from 'components/Review/Reviews';

export function DetailPage({ id }) {
  const { data, error, isLoading } = useGetRestaurantQuery(id);

  // photos, name, rating, is_closed, is_claimed, review_count, location?, hours, categories, display_phone
  // 으로 최상단 캐러셀 구현

  // location, hours로 location&hours 구현

  // restaurantReview.reviews로 리뷰 구현

  return (
    <>
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {!isLoading && <DetailBanner restaurantDetail={data.restaurantDetail} />}
      {!isLoading && <Location />}
      {!isLoading && <Reviews reviewList={data.restaurantReview.reviews} />}
      <Footer />
    </>
  );
}

DetailPage.defaultProps = {
  id: 'MWV8AoySYObkfVpaLhaqKQ',
};
