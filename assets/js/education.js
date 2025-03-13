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
  {
    title: "Workshop Pentest Samba Hack - G Inova",
    cardImage: "assets/images/education-page/sambahack.jpg",
    moocLink: "assets/images/education-page/sambahack.jpg",
  },
  {
    title: "Lean Six Sigma White Belt - Improvement Focus",
    cardImage: "assets/images/education-page/whitebelt.jpg",
    moocLink: "assets/images/education-page/whitebelt.jpg",
  },
  {
    title: "Networking Essentials - Cisco",
    cardImage: "assets/images/education-page/ite.jpg",
    moocLink: "assets/images/education-page/ite.jpg",
  },
  {
    title: "Data Science Fundamentals - Careerera",
    cardImage: "assets/images/education-page/dsf.jpg",
    moocLink: "assets/images/education-page/dsf.jpg",
  },
  {
    title: "Using Git for Distributed Development - The Linux Foundation",
    cardImage: "assets/images/education-page/git.jpg",
    moocLink: "assets/images/education-page/git.jpg",
  },
  {
    title: "Open Source Software Development Methods - The Linux Foundation",
    cardImage: "assets/images/education-page/opensource.jpg",
    moocLink: "assets/images/education-page/opensource.jpg",
  },
  {
    title: "Linux Tools for Developers - The Linux Foundation",
    cardImage: "assets/images/education-page/linuxtools.jpg",
    moocLink: "assets/images/education-page/linuxtools.jpg",
  },
  {
    title: "Linux for Developers - The Linux Foundation",
    cardImage: "assets/images/education-page/linuxfor.jpg",
    moocLink: "assets/images/education-page/linuxfor.jpg",
  },
  {
    title: "System Administration and IT Infrastructure Services - Google",
    cardImage: "assets/images/education-page/sysadmin.jpg",
    moocLink: "assets/images/education-page/sysadmin.jpg",
  },
  {
    title: "IT Security Defense againts the digital dark arts - Google",
    cardImage: "assets/images/education-page/defense.jpg",
    moocLink: "assets/images/education-page/defense.jpg",
  },
  {
    title: "Operating Systems and You Becoming a Power User - Google",
    cardImage: "assets/images/education-page/os.jpg",
    moocLink: "assets/images/education-page/os.jpg",
  },
  {
    title: "The Bits and Bytes of Computer Networking - Google",
    cardImage: "assets/images/education-page/bits.jpg",
    moocLink: "assets/images/education-page/bits.jpg",
  },
  {
    title: "M100: MongoDB for SQL Pros - MongoDB University",
    cardImage: "assets/images/education-page/mongo.jpg",
    moocLink: "assets/images/education-page/mongo.jpg",
  },
  {
    title: "Technical Support Fundamentals - Google",
    cardImage: "assets/images/education-page/ts.jpg",
    moocLink: "assets/images/education-page/ts.jpg",
  },
  {
    title: "Deep Learning with TensorFlow - Cognitive Class",
    cardImage: "assets/images/education-page/tensorflow.jpg",
    moocLink: "assets/images/education-page/tensorflow.jpg",
  },
   {
    title: "Database Design and Programming with SQL - KOMINFO",
    cardImage: "assets/images/education-page/databasesql.jpg",
    moocLink: "assets/images/education-page/databasesql.jpg",
  },
  {
    title: "Microsoft AI Classroom Series - Microsoft",
    cardImage: "assets/images/education-page/micosoftAI.jpg",
    moocLink: "assets/images/education-page/micosoftAI.jpg",
  },
  {
    title: "Deep Learning Fundamentals - Cognitive Class",
    cardImage: "assets/images/education-page/deeplearning.jpg",
    moocLink: "assets/images/education-page/deeplearning.jpg",
  },
  {
    title: "Introduction to Cybersecurity Tools and Cyber Attacks - IBM",
    cardImage: "assets/images/education-page/cyberattack.jpg",
    moocLink: "assets/images/education-page/cyberattack.jpg",
  },
  {
    title: "Introduction to Information Security - Cyber Army Academy",
    cardImage: "assets/images/education-page/infosec.jpg",
    moocLink: "assets/images/education-page/infosec.jpg",
  },
  {
    title: "Complete PBX5 - Xorcom",
    cardImage: "assets/images/education-page/xorcom.jpg",
    moocLink: "assets/images/education-page/xorcom.jpg",
  },
  {
    title: "Coding Experience Bootcamp - CfDS",
    cardImage: "assets/images/education-page/codingbootcamp.jpg",
    moocLink: "assets/images/education-page/codingbootcamp.jpg",
  },
  {
    title: "Introduction to IoT - Cisco",
    cardImage: "assets/images/education-page/iot.jpg",
    moocLink: "assets/images/education-page/iot.jpg",
  },
  {
    title: "Introduction to Packet Tracer - Cisco",
    cardImage: "assets/images/education-page/itpt.jpg",
    moocLink: "assets/images/education-page/itpt.jpg",
  },
  {
    title: "Cybersecurity Essentials - Cisco",
    cardImage: "assets/images/education-page/cybes.jpg",
    moocLink: "assets/images/education-page/cybes.jpg",
  },
  {
    title: "Data Visualization with Python - Cognitive Class",
    cardImage: "assets/images/education-page/datavis.jpg",
    moocLink: "assets/images/education-page/datavis.jpg",
  },
  {
    title: "Introduction to Cybersecurity - Cisco",
    cardImage: "assets/images/education-page/ics.jpg",
    moocLink: "assets/images/education-page/ics.jpg",
  },
  {
    title: "Data Analysis with Python - Cognitive Class",
    cardImage: "assets/images/education-page/datanalaysys.jpg",
    moocLink: "assets/images/education-page/datanalaysys.jpg",
  },
   {
    title: "Introduction to Data Science - Cognitive Class",
    cardImage: "assets/images/education-page/intods.jpg",
    moocLink: "assets/images/education-page/intods.jpg",
  },
   {
    title: "Data Science Hands-On with Open Source Tools - Cognitive Class",
    cardImage: "assets/images/education-page/datasciencetool.jpg",
    moocLink: "assets/images/education-page/datasciencetool.jpg",
  },
  {
    title: "Data Science Methodology - Cognitive Class",
    cardImage: "assets/images/education-page/datasciencemetod.jpg",
    moocLink: "assets/images/education-page/datasciencemetod.jpg",
  },
  {
    title: "Python Data Science - SanberCode",
    cardImage: "assets/images/education-page/pythondatascience.jpg",
    moocLink: "assets/images/education-page/pythondatascience2.jpg",
  },
  {
    title: "Path Pengembangan Web Node.js - Progate",
    cardImage: "assets/images/education-page/progate.jpg",
    moocLink: "assets/images/education-page/progate.jpg",
  },
  {
    title: "Python - DTS KOMINFO",
    cardImage: "assets/images/education-page/pythondts.jpg",
    moocLink: "assets/images/education-page/pythondts.jpg",
  },
  {
    title: "PCAP Programming Essentials in Python - Python Institute",
    cardImage: "assets/images/education-page/pcaptraining.jpg",
    moocLink: "assets/images/education-page/pcaptraining.jpg",
  },
  {
    title: "SQL and Relational Databases - Cognitive Class",
    cardImage: "assets/images/education-page/sql101.jpg",
    moocLink: "assets/images/education-page/sql101.jpg",
  },
  {
    title: "Python-101 for Data Science - Cognitive Class",
    cardImage: "assets/images/education-page/python101.jpg",
    moocLink: "assets/images/education-page/python101.jpg",
  },
  {
    title: "Be A White Hat Hacker and Pen Tester - Eduonix",
    cardImage: "assets/images/education-page/whitehacker.jpg",
    moocLink: "assets/images/education-page/whitehacker.jpg",
  },{
    title: "Outlier Detection Algorithms - Udemy",
    cardImage: "assets/images/education-page/datamining.jpg",
    moocLink: "assets/images/education-page/datamining.jpg",
  },
  {
    title: "RPKI - APJII",
    cardImage: "assets/images/education-page/rpki.jpg",
    moocLink: "assets/images/education-page/rpki.jpg",
  },
  {
    title: "HTML Fundamentals Course - SOLOLEARN",
    cardImage: "assets/images/education-page/html.jpg",
    moocLink: "assets/images/education-page/html.jpg",
  },
  {
    title: "SEO For Beginners Online Course - Udemy",
    cardImage: "assets/images/education-page/seoudemy.jpg",
    moocLink: "assets/images/education-page/seoudemy.jpg",
  },
  {
    title: "PHP Tutorial Course - SOLOLEARN",
    cardImage: "assets/images/education-page/php.jpg",
    moocLink: "assets/images/education-page/php.jpg",
  },
  {
    title: "Phyton 3 Tutorial Course - SOLOLEARN",
    cardImage: "assets/images/education-page/phyton3.jpg",
    moocLink: "assets/images/education-page/phyton3.jpg",
  },
  {
    title: "Google Web Designer Basics - Google",
    cardImage: "assets/images/education-page/googleweb.jpg",
    moocLink: "assets/images/education-page/googleweb2.jpg",
  },
  {
    title: "Java Fundamental - PT Mitra Industri Telematika",
    cardImage: "assets/images/education-page/java.jpg",
    moocLink: "assets/images/education-page/java.jpg",
  },
  {
    title: "Workshop CodeIgniter Batch III - CyberLearning.ID",
    cardImage: "assets/images/education-page/codeigniter.jpg",
    moocLink: "assets/images/education-page/codeigniter.jpg",
  },
  {
    title: "Delighted Customer Service - VIP Development Center",
    cardImage: "assets/images/education-page/customerservice.jpg",
    moocLink: "assets/images/education-page/customerservice.jpg",
  },
  {
    title: "Linux Enterprise Server Development - vSchool.ID",
    cardImage: "assets/images/education-page/rhel.jpg",
    moocLink: "assets/images/education-page/rhel.jpg",
  },
  {
    title: "Cisco Certified Network Associate (CCNA) - IDNetworkers",
    cardImage: "assets/images/education-page/ccnatraining.jpg",
    moocLink: "assets/images/education-page/ccnatraining.jpg",
  },
  {
    title: "Workshop Laravel Framework - Wabeta Education",
    cardImage: "assets/images/education-page/laravel.jpg",
    moocLink: "assets/images/education-page/laravel.jpg",
  },
  {
    title: "B4J Programming Workshop - Facult of Computer M.H.T University",
    cardImage: "assets/images/education-page/B4J.jpg",
    moocLink: "assets/images/education-page/B4J.jpg",
  },
  {
    title: "Android Web App Training - WebHozz Training",
    cardImage: "assets/images/education-page/androidwebapp.jpg",
    moocLink: "assets/images/education-page/androidwebapp.jpg",
  },
  {
    title: "Android Development Training - WebHozz Training",
    cardImage: "assets/images/education-page/androidtraining.jpg",
    moocLink: "assets/images/education-page/androidtraining.jpg",
  },
  {
    title: "MikroTik Certified Routing Engineer (MTCRE) - IDNetworkers",
    cardImage: "assets/images/education-page/mtcre.jpg",
    moocLink: "assets/images/education-page/mtcre.jpg",
  },
  {
    title: "MikroTik Certified Network Associate (MTCNA) - IDNetworkers",
    cardImage: "assets/images/education-page/mtcna.jpg",
    moocLink: "assets/images/education-page/mtcna.jpg",
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
