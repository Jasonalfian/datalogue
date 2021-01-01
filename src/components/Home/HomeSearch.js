import React from 'react'

export default function HomeSearch() {
    return (
        <div className="homeSearch d-flex align-items-center">
      <div className="container">
          {/* <Title title="Our Story"/> */}
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto text-center">
            <h2 data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease" className="font-weight-bold text-white mb-4">
                "Without data you're just another person with opinion"
            </h2>
            <h2 data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="ease" className="mb-2 text-white">
                W. Edward Derming
            </h2>

            {/* Untuk input searchbar */}
            {/* <input type="search" className="form-control mt-3 heightSearch" placeholder="Cari datasets dan poster disini"/> */}
          </div>
        </div>
      </div>
        </div>
    )
}
