// function component
const BannerBottom = (props: any) => {
  const banners = props.banners;
  // just loop thru the banners to show all banner images
  return (
    <div className="ban-bottom-w3l">
      <div className="container">
        <div className="col-md-12 ban-bottom3">
          <div className="ban-img">
            <div className="row">
              {banners &&
                banners.map((banner: any, index: number) => (
                  <div key={index} className="ban-top col-md-3">
                    <img
                      src={banner.bannerImage}
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                ))}

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default BannerBottom;
