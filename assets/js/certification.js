AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Certified Product Development Manager (CPDM)",
    ID: "2023/CPDM-II/ESAS/XI/007",
    DATE: "2023-11-19",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/cpdm.png",
    moocLink: "assets/images/certification-page/cpdm.pdf",
    Badge: "#",
  },{
    title: "AWS Cloud Quest: Cloud Practitioner",
    ID: "37b3c915-e6f8-4b37-94c5-4fa26a1b7c64",
    DATE: "2023-02-16",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/awscloudpractisioner.png",
    moocLink: "assets/images/certification-page/awscloudpractisioner.png",
    Badge: "https://www.credly.com/badges/37b3c915-e6f8-4b37-94c5-4fa26a1b7c64",
  },
  {
    title: "NSE 3 Network Security Associate",
    ID: "CpHhgPV2kD",
    DATE: "2023-01-01",
    EXPIRED: "2025-01-01",
    cardImage: "assets/images/certification-page/nse3.png",
    moocLink: "assets/images/certification-page/nse3.pdf",
    Badge: "https://training.fortinet.com/mod/customcert/verify_certificate.php",
  },
  {
    title: "Cisco DevNet Associate",
    ID: "edbb3641-b58b-45e6-a7e7-9604195f448d",
    DATE: "2022-05-23",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/devnet.png",
    moocLink: "assets/images/certification-page/devnet.pdf",
    Badge: "https://www.credly.com/badges/edbb3641-b58b-45e6-a7e7-9604195f448d",
  },
  {
    title: "Scrum Master Professional Certificate (SMPC)",
    ID: "56968286",
    DATE: "2021-02-06",
    EXPIRED: "2024-05-19",
    cardImage: "assets/images/certification-page/scrummaster.png",
    moocLink: "assets/images/certification-page/scrummaster.pdf",
    Badge: "https://www.credly.com/badges/66d4305c-24d7-49f2-b7cb-ec19664b0ed2",
  },
  {
    title: "ACA - Cloud Native",
    ID: "IACA05210600052353L",
    DATE: "2021-06-15",
    EXPIRED: "2023-06-15",
    cardImage: "assets/images/certification-page/acacloudnative.png",
    moocLink: "assets/images/certification-page/acacloudnative.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=IACA05210600052353L",
	//https://xuecdn2.aliyunedu.net/img_54e3c2f2900d9e7e7fe185ad561e7f9d.png
  },{
    title: "CCNA: Enterprise Networking, Security, and Automation",
    ID: "a66509f1-6c3c-45b2-82bd-176c6f1a9351",
    DATE: "2021-06-09",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/ccnaensa.png",
    moocLink: "assets/images/certification-page/ccnaensa.pdf",
    Badge: "https://www.credly.com/badges/a66509f1-6c3c-45b2-82bd-176c6f1a9351",
  },{
    title: "ACA - Cloud Security",
    ID: "IACA02210500050689L",
    DATE: "2021-05-11",
    EXPIRED: "2023-05-11",
    cardImage: "assets/images/certification-page/acacloudsecurity.png",
    moocLink: "assets/images/certification-page/acacloudsecurity.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=IACA02210500050689L",
	//https://xuecdn2.aliyunedu.net/img_a2b70e42980cb59f879b020ebb9f012d.png
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    ID: "09614485-36b9-48b5-b775-0c2f63becaf9",
    DATE: "2021-05-01",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/ccnasrwe.png",
    moocLink: "assets/images/certification-page/ccnasrwe.pdf",
    Badge: "https://www.credly.com/badges/09614485-36b9-48b5-b775-0c2f63becaf9",
  },{
    title: "Google Project Management Certificate",
    ID: "8SSGYJ7BDMZN",
    DATE: "2021-04-23",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/gpmc.png",
    moocLink: "assets/images/certification-page/gpmc.pdf",
    Badge: "https://www.credly.com/badges/a7fe2c83-db6d-4120-9d5b-ed660ac7d97d",
  },
  {
    title: "CCNA: Introduction to Networks",
    ID: "549f7261-6537-4402-a1c3-bf0042d43c34",
    DATE: "2021-04-12",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/ccnaitn.png",
    moocLink: "assets/images/certification-page/ccnaitn.pdf",
    Badge: "https://www.credly.com/badges/549f7261-6537-4402-a1c3-bf0042d43c34",
  },
/*
  {
    title: "ACCS - Protect Your Web Application on Alibaba Cloud",
    ID: "ACFS02210400049366",
    DATE: "2021-04-09",
    EXPIRED: "2023-04-09",
    cardImage: "assets/images/certification-page/ddos3.png",
    moocLink: "assets/images/certification-page/ddos3.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=ACFS02210400049366",
	// https://xuecdn2.aliyunedu.net/img_4ebe11c26ce162e5f349583ed972b4c9.png
  },{
    title: "ACCS - Best Practice to Protect Your Servers on Alibaba Cloud",
    ID: "ACFS04210400049319",
    DATE: "2021-04-08",
    EXPIRED: "2023-04-08",
    cardImage: "assets/images/certification-page/ddos2.png",
    moocLink: "assets/images/certification-page/ddos2.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=ACFS04210400049319",
	// https://xuecdn2.aliyunedu.net/img_b271a6fc0afddabe425aa0984ff0c2ab.png
  },{
    title: "ACCS - Use Alibaba Cloud Anti-DDoS To Defend DoS Attack",
    ID: "ACFS06210400049219",
    DATE: "2021-04-07",
    EXPIRED: "2023-04-07",
    cardImage: "assets/images/certification-page/ddos1.png",
    moocLink: "assets/images/certification-page/ddos1.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=ACFS06210400049219",
	// https://xuecdn2.aliyunedu.net/img_b358cf17a90f4ad59454d4e4d7d3abcc.png
  },
 */ 
  {
    title: "ACA - Cloud Computing",
    ID: "IACA01210300048885L",
    DATE: "2021-03-29",
    EXPIRED: "2023-03-29",
    cardImage: "assets/images/certification-page/acacc.png",
    moocLink: "assets/images/certification-page/acacc.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=IACA01210300048885L",
	// https://xuecdn2.aliyunedu.net/img_0b04ebda75b8c69d0e46994b103b298a.png
  },
/*  
  {
    title: "ACCC - Using ECS to Construct a Dynamic Website",
    ID: "ACLC02210300048828",
    DATE: "2021-03-27",
    EXPIRED: "2023-03-27",
    cardImage: "assets/images/certification-page/aclc02.png",
    moocLink: "assets/images/certification-page/aclc02.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=ACLC02210300048828",
	// https://xuecdn2.aliyunedu.net/img_f512ccb08e7a5d2325cbd6df5dfe50a6.png
  },{
    title: "ACCC - Using OSS to Publish a Static Website",
    ID: "ACLC01210200046745",
    DATE: "2021-02-23",
    EXPIRED: "2023-02-23",
    cardImage: "assets/images/certification-page/aclc01.png",
    moocLink: "assets/images/certification-page/aclc01.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=ACLC01210200046745",
	// https://xuecdn2.aliyunedu.net/img_7d6862c32b573f44c26c9b24a8c9c12d.png
  },{
    title: "ACCC - Operate and Manage a Relational Database on the Cloud",
    ID: "ACFC04210200046482",
    DATE: "2021-02-19",
    EXPIRED: "2023-02-19",
    cardImage: "assets/images/certification-page/omrdc.png",
    moocLink: "assets/images/certification-page/omrdc.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=ACFC04210200046482",
	// https://xuecdn2.aliyunedu.net/img_5efb281b6acbd1e6e7a4885c9eca7fad.png
  },,{
    title: "ACCC - Operate and Manage OSS",
    ID: "ACLC05210200046501",
    DATE: "2021-02-19",
    EXPIRED: "2023-02-19",
    cardImage: "assets/images/certification-page/acaoss.png",
    moocLink: "assets/images/certification-page/acaoss.pdf",
    Badge: "https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=ACLC05210200046501",
	// https://xuecdn2.aliyunedu.net/img_40b6fc8a6f9927d6523ac3519ff86927.png
  },
*/ 
/*
  {
    title: "NSE 2 Network Security Associate",
    ID: "b4nXLLpHsM",
    DATE: "2021-01-10",
    EXPIRED: "2023-01-10",
    cardImage: "assets/images/certification-page/nse2.png",
    moocLink: "assets/images/certification-page/nse2.pdf",
    Badge: "https://training.fortinet.com/mod/customcert/verify_certificate.php",
  },
*/
/*
  {
    title: "NSE 1 Network Security Associate",
    ID: "A0Pqfe49qf",
    DATE: "2021-01-06",
    EXPIRED: "2023-01-06",
    cardImage: "assets/images/certification-page/nse1.png",
    moocLink: "assets/images/certification-page/nse1.pdf",
    Badge: "https://training.fortinet.com/mod/customcert/verify_certificate.php",
  },
  {
    title: "Remote Work and Virtual Collaboration Professional Certificate",
    ID: "53666016",
    DATE: "2020-12-16",
    EXPIRED: "2022-12-16",
    cardImage: "assets/images/certification-page/RWVCPC.png",
    moocLink: "assets/images/certification-page/RWVCPC.pdf",
    Badge: "https://www.youracclaim.com/badges/9170399d-21e7-437f-a0e1-dc4b99bbff52",
  },
*/
  {
    title: "Open Source Software Development, Linux and Git Specialization",
    ID: "LM6JBZ4Q4CHM",
    DATE: "2020-12-02",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/git.png",
    moocLink: "assets/images/certification-page/git.pdf",
    Badge: "https://www.youracclaim.com/badges/7b1ad24b-f76e-4ced-b62d-a8c4b398d29b",
  },
/*  
  {
    title: "Cyber Security Foundation Professional Certificate (CSFPC)",
    ID: "52242347",
    DATE: "2020-11-26",
    EXPIRED: "2022-11-26",
    cardImage: "assets/images/certification-page/csfpc.png",
    moocLink: "assets/images/certification-page/csfpc.pdf",
    Badge: "https://www.youracclaim.com/badges/539e6526-bc69-43c3-8ee4-7d060734820a",
  },
*/
  {
    title: "Google IT Support Professional Certificate",
    ID: "KQ7TDRCWRYKW",
    DATE: "2020-11-07",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/itsupport.png",
    moocLink: "assets/images/certification-page/itsupport.pdf",
    Badge: "https://www.youracclaim.com/badges/028e2322-cda8-4395-a524-d01ae25979d6",
	//https://www.coursera.org/account/accomplishments/verify/KQ7TDRCWRYKW
  },
  {
    title: "HCIA-Routing & Switching (HCIA-RS)",
    ID: "01010010180805057623798",
    DATE: "2020-09-13",
    EXPIRED: "2023-09-12",
    cardImage: "assets/images/certification-page/hcia-rs.png",
    moocLink: "assets/images/certification-page/hcia-rs.pdf",
    Badge: "https://e.huawei.com/en/talent/#/cert/certificate-verification",
  },
  {
    title: "PCAP – Certified Associate in Python Programming",
    ID: "YjXn.hvds.MW3O",
    DATE: "2020-07-30",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/pcap.png",
    moocLink: "assets/images/certification-page/pcap.pdf",
    Badge: "https://www.youracclaim.com/badges/a6d74f47-4fdf-4b7f-a48c-bb1bc7aa96a0",
  },
  {
    title: "Juniper Networks Certified Associate, Junos (JNCIA-Junos)",
    ID: "JPR00297543",
    DATE: "2020-07-17",
    EXPIRED: "2023-07-17",
    cardImage: "assets/images/certification-page/jncia-junos.png",
    moocLink: "assets/images/certification-page/jncia-junos.pdf",
    Badge: "https://www.youracclaim.com/badges/e62840d2-fe03-4d09-87c7-9945424f5df9",
  },
  {
    title: "Multi Cloud Networking Associate (MCNA)",
    ID: "2020-1953",
    DATE: "2020-07-08",
    EXPIRED: "2023-07-08",
    cardImage: "assets/images/certification-page/ace.png",
    moocLink: "assets/images/certification-page/ace.pdf",
    Badge: "https://www.youracclaim.com/badges/9f11dca7-0de2-4fe5-b9cd-ff1c18aa8bb5",
  },
/*  
  {
    title: "Scrum Foundation Professional Certificate (SFPC)",
    ID: "CLVPNFNNYY-SLJKKKZV-XHRCTHPRMS",
    DATE: "2020-07-03",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/CertiProf-Badge-SFPC.png",
    moocLink: "assets/images/certification-page/sfpc.pdf",
    Badge: "https://www.youracclaim.com/badges/64a6eac6-d432-4648-986a-a0779255e2d8",
  },
*/
  {
    title: "Certified Network Security Specialist (CNSS)",
    ID: "18981258",
    DATE: "2020-06-03",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/cnss.png",
    moocLink: "assets/images/certification-page/cnss.pdf",
    Badge: "https://www.credential.net/72f7d481-d0f5-4d26-9de0-db8ad2e05429",
  },
  {
    title: "MikroTik Certified Routing Engineer (MTCRE)",
    ID: "1603RE077",
    DATE: "2016-03-13",
    EXPIRED: "2019-03-12",
    cardImage: "assets/images/certification-page/mtcre.png",
    moocLink: "assets/images/certification-page/mtcre.pdf",
	Badge: "https://mikrotik.com/certificateSearch",
  },
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
	ID : "1603NA159",
	DATE : "2016-03-06",
    EXPIRED: "2019-03-05",
    cardImage: "assets/images/certification-page/MikroTik-Certified-Network-Associate1.png",
    moocLink: "assets/images/certification-page/mtcna.pdf",
	Badge: "https://mikrotik.com/certificateSearch",
  },
];

const experience = [
  {
    img: "assets/images/certification-page/c1.png"
  },
  {
    img: "assets/images/certification-page/c2.jpg"
  },
  {
    img: "assets/images/certification-page/c3.png"
  },
  {
    img: "assets/images/certification-page/c4.png"
  },
  {
    img: "assets/images/certification-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, ID, DATE, EXPIRED, cardImage, moocLink, Badge }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="400" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a title="Sertifikat"  href="${moocLink}" target="_blank"><i class="fa fa-file-pdf fa-3x" aria-hidden="true" style="color: white;"></i></a>                                   
                    <a title="Verifikasi" href="${Badge}" target="_blank"><i class="fa fa-info-circle fa-3x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:10px;">${title}
					<br> ID Sertifikasi : ${ID}<br> Tanggal : ${DATE}<br> Berlaku s/d : ${EXPIRED}</h6>
					
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
