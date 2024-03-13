const collection = [
    {
      pic:'images/1.jpg',
      country: 'Poland',
      place: 'Morskie oko Lake',
      Activity: 'Hiking,Site seeing',
      VisitDuration: '3 hrs',
      link:'https://www.tripadvisor.com/Attraction_Review-g285710-d286157-Reviews-Lake_Morskie_Oko-Tatra_National_Park_Lesser_Poland_Province_Southern_Poland.html'
    },
    {
        pic:'images/2.jpg',
        country: 'Luxembourg',
        place: 'Vianden Castle',
        Activity: 'Hiking,Site seeing,',
        VisitDuration: '3 hrs',
        link:'https://www.tripadvisor.com/Attraction_Review-g190347-d546885-Reviews-Vianden_Castle-Vianden_Diekirch_District.html'
    },
    {
        pic:'images/3.jpg',
        country: 'France',
        place: 'Effiel tower,Paris',
        Activity: 'Site seeing,City tour',
        VisitDuration: '5 hrs',
        link:'https://www.tripadvisor.com/Attraction_Review-g187147-d188151-Reviews-Eiffel_Tower-Paris_Ile_de_France.html'
    },
    {
        pic:'images/4.jpg',
        country: 'Portugal',
        place: 'Pico do Arieiro,Madeira',
        Activity: 'Site seeing,Hiking',
        VisitDuration: '5 hrs',
        link:'https://www.tripadvisor.com/Attraction_Review-g189167-d4740534-Reviews-Pico_do_Arieiro-Funchal_Madeira_Madeira_Islands.html'
    },
    {
        pic:'images/5.jpg',
        country: 'Belgium',
        place: 'Rode Moerpolder Tulip fields',
        Activity: 'Site seeing',
        VisitDuration: '2 hrs',
        link:'https://charlieswanderings.com/travelguides/tulips-in-belgium/'
    },
    {
        pic:'images/6.jpg',
        country: 'Denmark',
        place: 'Nyhavn Harbour,Copenhagen',
        Activity: 'Site seeing',
        VisitDuration: '2 hrs',
        link:'https://www.tripadvisor.com/Attraction_Review-g189541-d207265-Reviews-Nyhavn-Copenhagen_Zealand.html'
    },
    {
        pic:'images/7.jpg',
        country: 'Iceland',
        place: 'Northern lights at reykjavik',
        Activity: 'Site seeing,Nature',
        VisitDuration: '2 hrs',
        link:'https://www.tripadvisor.com/Articles-lF4CiLxoVJ6A-Best_time_place_to_see_northern_lights_in_iceland.html'
    },
    {
        pic:'images/8.jpg',
        country: 'Germany',
        place: 'Hohenzollern Bridge cologne',
        Activity: 'Site seeing',
        VisitDuration: '2 hrs',
        link:'https://www.tripadvisor.com/Attraction_Review-g187371-d2251286-Reviews-Hohenzollern_Bridge-Cologne_North_Rhine_Westphalia.html'
    },
    {
        pic:'images/9.jpg',
        country: 'Switzerland',
        place: 'Mountain Pilatus',
        Activity: 'Site seeing,Nature',
        VisitDuration: '3 hrs',
        link:'https://www.tripadvisor.com/Attraction_Review-g1124758-d3233666-Reviews-Pilatus_Luzern-Kriens_Lucerne.html'
    },
    {
        pic:'images/10.jpg',
        country: 'Cyprus',
        place: 'Nissi Beach',
        Activity: 'Site seeing,WaterSport',
        VisitDuration: '3 hrs',
        link:'https://www.tripadvisor.com/Attraction_Review-g262055-d1519581-Reviews-Nissi_Beach-Ayia_Napa_Famagusta_District.html'
    }
]

document.addEventListener('DOMContentLoaded', function () {// to load all elements before fetch
    

    const photo=document.querySelectorAll('img');
    const text=document.querySelectorAll('.row2');
    console.log(text)
    //loop to get details
    collection.forEach(function(e,index){
       photo[index].src=e.pic;//fetch image from collection
      //append innerHTML to add fetch details
       const info = text[index];
       info.innerHTML = `
           <h3>Country:${e.country}</h3>
           <p>Place:${e.place}</p>
           <p>Activity:${e.Activity}</p>
           <p>Duration:${e.VisitDuration}</p>
           <a href="${e.link}">Link for details</a>
        `;
   
    });

});

