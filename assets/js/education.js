AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Workshop Pentest Teknik Spyware - G Inova",
    cardImage: "assets/images/education-page/spywar.jpg",
    moocLink: "assets/images/education-page/spywar.jpg",
  },
  {
    title: "Bootcamp Spark AR Studio - Bisa AI",
    cardImage: "assets/images/education-page/filter.jpg",
    moocLink: "assets/images/education-page/filter.jpg",
  },
  {
    title: "IT Governance Overview - Brainmatics",
    cardImage: "assets/images/education-page/brain.jpg",
    moocLink: "assets/images/education-page/brain.jpg",
  },
  {
    title: "Bootcamp Rancang Bangun Internet of Things - Bisa AI",
    cardImage: "assets/images/education-page/bootcampiot.jpg",
    moocLink: "assets/images/education-page/bootcampiot.jpg",
  },
];


let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="400" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:10px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
