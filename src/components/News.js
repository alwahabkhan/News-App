import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =  [
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Alli Rosenbloom",
        "title": "Read Pete Davidson's poignant remarks from 'SNL' opening - CNN",
        "description": "“Saturday Night Live” host Pete Davidson addressed “the horrible images and stories from Israel and Gaza” in deeply personal remarks during the opening minutes of the long-running sketch show’s new episode.",
        "url": "https://www.cnn.com/2023/10/15/entertainment/pete-davidson-snl-opening/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231015003957-pete-davidson-cold-open-snl-10142023.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-10-15T18:01:00Z",
        "content": "Saturday Night Live host Pete Davidson addressed the horrible images and stories from Israel and Gaza in deeply personal remarks during the opening minutes of the long-running sketch shows new episod… [+1860 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Alli Rosenbloom",
        "title": "Chris Evans says he's 'enjoying life' as a newlywed after marrying Alba Baptista - CNN",
        "description": "Chris Evans has traded in Captain America’s shield for a more sentimental piece of armor, confirming to the audience at New York Comic-Con that he recently wed actress Alba Baptista.",
        "url": "https://www.cnn.com/2023/10/15/entertainment/chris-evans-newlywed/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231015115655-chris-evans-comic-con-1014.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-10-15T17:06:00Z",
        "content": "Chris Evans has traded in his Captain America shield for a more sentimental accessory. \r\nThe Marvel actor was sporting a wedding band on Saturday during an appearance at New York Comic-Con (NYCC), wh… [+1336 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Baltimore Ravens vs. Tennessee Titans Game Highlights | NFL 2023 Week 6 - NFL",
        "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
        "url": "https://www.youtube.com/watch?v=RUCNnG21c9Y",
        "urlToImage": "https://i.ytimg.com/vi/RUCNnG21c9Y/maxresdefault.jpg",
        "publishedAt": "2023-10-15T16:55:21Z",
        "content": null
    },
    {
        "source": {
            "id": "espn",
            "name": "ESPN"
        },
        "author": "Turron Davenport",
        "title": "Titans' Ryan Tannehill suffers ankle injury, carted off - ESPN - ESPN",
        "description": "Titans quarterback Ryan Tannehill suffered an ankle injury and was carted to the locker room Sunday against the Ravens.",
        "url": "https://www.espn.com/nfl/story/_/id/38664768/titans-ryan-tannehill-suffers-ankle-injury-carted-off",
        "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1015%2Fr1238739_1296x729_16%2D9.jpg",
        "publishedAt": "2023-10-15T16:23:00Z",
        "content": "Titans quarterback Ryan Tannehill suffered a right ankle injury and was carted to the locker room late in Tennessee's 24-16 loss to the Baltimore Ravens on Sunday at Tottenham Hotspur Stadium in Lond… [+1603 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Nidal Al-Mughrabi, Emily Rose",
        "title": "Netanyahu vows to demolish Hamas, as Israel urges Gazans south - Reuters",
        "description": "Israel's Prime Minister Benjamin Netanyahu vowed on Sunday to \"demolish Hamas\" as his <a href=\"https://link.reuters.com/e/hopTgMwyTDb\" target=\"_blank\">troops prepared to move into the Gaza Strip</a> in pursuit of Islamist militants whose deadly rampage throug…",
        "url": "https://www.reuters.com/world/middle-east/gaza-braces-israeli-ground-assault-fears-conflict-spreading-grow-2023-10-15/",
        "urlToImage": "https://www.reuters.com/resizer/7Ob9fmDYfsgSRc9LxAE8T_VIDVw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HLQEIHGHHFMIRKNXBKQMINR3QQ.jpg",
        "publishedAt": "2023-10-15T16:22:00Z",
        "content": "GAZA/JERUSALEM, Oct 15 (Reuters) - Israel's Prime Minister Benjamin Netanyahu vowed on Sunday to \"demolish Hamas\" as his troops prepared to move into the Gaza Strip in pursuit of Islamist militants w… [+6131 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Afghanistan hit by seventh earthquake in eight days - Guardian News",
        "description": "A magnitude 6.3 earthquake has struck western Afghanistan, just over a week after powerful quakes and aftershocks killed thousands of people and flattened vi...",
        "url": "https://www.youtube.com/watch?v=GENskga7F70",
        "urlToImage": "https://i.ytimg.com/vi/GENskga7F70/maxresdefault.jpg",
        "publishedAt": "2023-10-15T16:17:17Z",
        "content": null
    },
    {
        "source": {
            "id": "financial-times",
            "name": "Financial Times"
        },
        "author": "Heba Saleh, Lauren Fedor, Neri Zilber, John Reed",
        "title": "US warns Iran against escalating Israel-Hamas war into regional conflict - Financial Times",
        "description": "Washington has privately communicated to Tehran, US national security adviser says",
        "url": "https://www.ft.com/content/8f78ed3e-0471-4bdf-b49f-54e4d614b2af",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fd29d4d53-17b9-40fb-993d-24c05e28961f.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2023-10-15T16:05:52Z",
        "content": "The US has held back-channel talks with Iran to warn the Islamic republic against escalating the war between Israel and Hamas into a broader regional conflict, according to President Joe Bidens top s… [+5498 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WLWT Cincinnati"
        },
        "author": "Fletcher Keel",
        "title": "Bengals announce inactives for Week 6 matchup against Seattle Seahawks - WLWT Cincinnati",
        "description": "A key offensive weapon is set to return to the Cincinnati Bengals lineup Sunday against the Seattle Seahawks.",
        "url": "https://www.wlwt.com/article/cincinnati-bengals-seattle-seahawks-week-6-2023-inactives-tee-higgins/45539927",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/ap26507634372c93.jpg?crop=1.00xw:0.846xh;0,0.0342xh&resize=1200:*",
        "publishedAt": "2023-10-15T15:35:00Z",
        "content": "CINCINNATI —A key offensive weapon is set to return to the Cincinnati Bengals lineup Sunday against the Seattle Seahawks.\r\nBengals wide receiver Tee Higgins is not listed among Sunday's inactives, me… [+1351 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Anthony Faiola, Annabelle Chapman",
        "title": "Poland votes in most pivotal election since fall of the Berlin Wall - The Washington Post",
        "description": "The vote outcome will have stark consequences for the future of Polish democracy, European unity and the West’s effort to confront Russian aggression.",
        "url": "https://www.washingtonpost.com/world/2023/10/15/poland-election-results-2023/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OOEHPAFHQFLUICAC4Q63HZQ7AI_size-normalized.jpg&w=1440",
        "publishedAt": "2023-10-15T15:09:00Z",
        "content": "Comment on this story\r\nComment\r\nPoles are voting Sunday in their most pivotal election since the fall of the Berlin Wall, with stark consequences for the future of Polish democracy, European unity an… [+5326 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "Jim Jordan's pressure campaign the 'dumbest thing you can do,' one House Republican says - POLITICO",
        "description": "Nobody likes a bully, Rep. Dan Crenshaw said.",
        "url": "https://www.politico.com/news/2023/10/15/jim-jordan-bullying-dan-crenshaw-00121609",
        "urlToImage": "https://static.politico.com/ab/25/60dadbac485a97ac001324414308/congress-68589.jpg",
        "publishedAt": "2023-10-15T14:41:05Z",
        "content": "Im supporting Jordan. Im going to vote for Jordan. As someone who wants Jim Jordan, the dumbest thing you can do is to continue pissing off those people, Crenshaw told CNNs Jake Tapper.\r\nThe majority… [+1183 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SciTechDaily"
        },
        "author": null,
        "title": "Mapping the Mind: Decoding Neuropsychiatric Disorders With the Human Brain Cell Atlas - SciTechDaily",
        "description": "Researchers map gene switches and brain cell types associated with schizophrenia, bipolar disorder, Alzheimer’s disease, and major depression. In a large, multi-institutional effort led by University of California San Diego (UCSD), researchers have analyzed m…",
        "url": "https://scitechdaily.com/?p=318045",
        "urlToImage": "https://scitechdaily.com/images/Brain-Mapping-Concept-Art.jpg",
        "publishedAt": "2023-10-15T14:23:20Z",
        "content": "ByUniversity of California - San DiegoOctober 15, 2023\r\nResearchers from the University of California San Diego, in a major collaborative effort, have mapped gene switches in different brain cell typ… [+6461 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "John Dickerson",
        "title": "David Brooks on his mission: To counter our nation's spiritual crisis - CBS News",
        "description": "The New York Times columnist believes it's not naïve to trust in others. In his new book, \"How to Know a Person,\" he aims to help people divided by partisanship and social media better see and understand one another.",
        "url": "https://www.cbsnews.com/news/david-brooks-on-how-to-know-a-person/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/10/14/64a7c0f5-18cd-446f-b3d7-4eaa94347414/thumbnail/1200x630/25cd2f90565e5f59fa95b69ba4a2fcef/david-brooks-1280.jpg?v=a6a127b4a243923dd1e2140b75f2a43c",
        "publishedAt": "2023-10-15T14:20:40Z",
        "content": "David Brooks is on a one-man mission aimed at no less than changing human behavior. For the last several years Brooks has been on two writing tracks: his New York Times column addresses politics and … [+7196 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Historian Yuval Noah Harari on Hamas' crimes against humanity - CBS Sunday Morning",
        "description": null,
        "url": "https://www.youtube.com/watch?v=_VITOiCQlPs",
        "urlToImage": null,
        "publishedAt": "2023-10-15T14:16:04Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
        "source": {
            "id": null,
            "name": "Notebookcheck.net"
        },
        "author": "Sanjiv Sathiah",
        "title": "Google Pixel 8, Pixel 8 Pro benchmark block lifted - NotebookCheck.net News - Notebookcheck.net",
        "description": "Google has lifted the block it placed on the ability for users to freely install benchmarking apps on its Pixel 8 and Pixel 8 Pro smartphones. The block had been in place during the review embargo period but extended past the on sale period where customers pu…",
        "url": "https://www.notebookcheck.net/Google-Pixel-8-Pixel-8-Pro-benchmark-block-lifted.759613.0.html",
        "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/p8p.png",
        "publishedAt": "2023-10-15T14:01:05Z",
        "content": "Google has lifted the block that it had put in place on its Pixel 8 and Pixel 8 Pro that prevented users from being able to freely install popular benchmarking apps like Geekbench and 3D Mark. In a h… [+2097 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "Jake Sullivan: 'Critical' that Israel allow safe places for civilians in Gaza to go - POLITICO",
        "description": "“They deserve safety and security,\" Biden's national security adviser said.",
        "url": "https://www.politico.com/news/2023/10/15/jake-sullivan-israel-gaza-civilians-00121604",
        "urlToImage": "https://static.politico.com/b4/9b/82e77c6349cdbc009cd4cd0b6544/biden-united-states-israel-palestinians-58075.jpg",
        "publishedAt": "2023-10-15T13:29:11Z",
        "content": "Palestinians in Gaza are bracing for an imminent Israeli ground invasion, in the wake of the deadly Hamas-led attack in Israels southern region last week. During that Oct. 7 surprise attack, Hamas mi… [+2087 chars]"
    },
    {
        "source": {
            "id": "fortune",
            "name": "Fortune"
        },
        "author": "Jane Thier",
        "title": "Dropbox’s CEO has a message for bosses who want workers to return to office: ‘They’re not resources to control’ - Fortune",
        "description": "“Trust people, and treat people like adults, and they’ll behave like adults,” Drew Houston says of the company’s virtual-first plan.",
        "url": "https://fortune.com/2023/10/15/dropbox-ceo-remote-work-return-to-office/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/10/C-Suite-Drew-Houstin-Dropbox.jpg?resize=1200,600",
        "publishedAt": "2023-10-15T13:00:00Z",
        "content": "What would Drew Houston, CEO of Silicon Valley software giant Dropbox, say to fellow CEOslike Googles Sundar Pichai or Metas Mark Zuckerbergwho seem to believe that three days a week in-person is cru… [+4660 chars]"
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Steven Rosenbush, Isabelle Bousquette, Belle Lin",
        "title": "Want to Know the AI Lingo? Learn the Basics, From NLP to Neural Networks - The Wall Street Journal",
        "description": "A guide to some of the most important concepts to demystify the technology that has everyone talking",
        "url": "https://www.wsj.com/tech/ai/ai-lingo-technology-terms-definitions-69b41e31",
        "urlToImage": "https://images.wsj.net/im-862870/social",
        "publishedAt": "2023-10-15T13:00:00Z",
        "content": null
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Greg Hilburn",
        "title": "Republican Jeff Landry claims back Louisiana governor's office in stunning GOP victory - USA TODAY",
        "description": "Republican Jeff Landry posts stunning primary win to become Louisiana's next governor.",
        "url": "https://www.usatoday.com/story/news/politics/elections/2023/10/15/republican-jeff-landry-louisiana-gop/71194695007/",
        "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/09/14/PSHR/57aa9755-34de-4e7a-a1b3-5160011a5155-68.JPG?crop=3987,2243,x0,y154&width=3200&height=1801&format=pjpg&auto=webp",
        "publishedAt": "2023-10-15T12:54:23Z",
        "content": "BROUSSARD, La. Republican Jeff Landry will be Louisiana's next governor after a stunning victory in Saturday's primary election, deepening the GOP stronghold in the state.\r\n\"Do you love Louisiana?\" L… [+2179 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Space.com"
        },
        "author": "Daisy Dobrijevic",
        "title": "Annular solar eclipse of 2023 wows skywatchers with spectacular 'ring of fire' (photos, video) - Space.com",
        "description": "Behold some of the best annular solar eclipse 2023 photos from across the world.",
        "url": "https://www.space.com/annular-solar-eclipse-2023-photos",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/oc3u7untGGe3oRdaLBR9kT-1200-80.jpg",
        "publishedAt": "2023-10-15T12:51:27Z",
        "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
    },
    {
        "source": {
            "id": "the-hill",
            "name": "The Hill"
        },
        "author": "Lauren Sforza",
        "title": "Indigenous Australians call for a week of silence after historic referendum fails - The Hill",
        "description": "Australian Indigenous leaders are calling for a week of silence after a referendum to recognize Indigenous people in the constitution failed. Every state and mainland territory except the Australian Capital Territory rejected the measure to enshrine an Indige…",
        "url": "https://thehill.com/policy/international/4256944-indigenous-australians-call-for-a-week-of-silence-after-historic-referendum-fails/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/10/AP23287125715111.jpg?w=1280",
        "publishedAt": "2023-10-15T12:50:00Z",
        "content": "Skip to content\r\nAustralian Indigenous leaders are calling for a week of silence after a referendum to recognize Indigenous people in the constitution failed.\r\nEvery state and mainland territory exce… [+1745 chars]"
    }
]
  constructor(){
    super();
    this.state={
      articles: this.articles,
      loading: false
    }
}
  render() {
    return (
      <div className='container my-3  '>
        <h2>NewsInSecond - Top HeadLines</h2>
        <div className="row my-4" >
            <div className='col-md-4 '>
            <NewsItem title="myTitle" description="mydesc" imgUrl="https://media.cnn.com/api/v1/images/stellar/prod/231015115655-chris-evans-comic-con-1014.jpg?c=16x9&q=w_800,c_fill"/>
            </div>
            <div className='col-md-4 '>
            <NewsItem title="myTitle" description="mydesc"/>
            </div>
            <div className='col-md-4 '>
            <NewsItem title="myTitle" description="mydesc"/>
            </div>  
        </div>
      
      </div>
    )
  }
}

export default News
