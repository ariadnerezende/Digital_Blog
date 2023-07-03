class Post{
  constructor(public id: number, public title: string, public imageUrl: string, public body: string){

  this.id = id;
  this.title = title;
  this.imageUrl = imageUrl;
  this.body = body;
  }
}

class PostDetails{
  constructor(public id: number, public postId: number, public email: string, public body: string){

  this.id = id;
  this.postId = postId;
  this.email = email;
  this.body = body;
  }
}

const posts: Post[] = [
  new Post(1, 'The role of AI in digital transformation', 'https://images.pexels.com/photos/8728379/pexels-photo-8728379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'AI plays a transformative role in the digital landscape, revolutionizing industries and driving digital transformation. With its ability to process vast amounts of data and derive actionable insights, AI empowers organizations to make data-driven decisions, enhance operational efficiency, and deliver personalized customer experiences.In the realm of data analysis, AI algorithms can uncover hidden patterns, correlations, and trends that humans might miss. This enables businesses to gain a deeper understanding of their customers, optimize processes, and identify new market opportunities. AI-powered predictive analytics also enables organizations to forecast future outcomes, helping them make proactive decisions and stay ahead of the competition.'),
  new Post(2, 'Data privacy: challenges and solutions in the digital age', 'https://images.pexels.com/photos/5240543/pexels-photo-5240543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Data privacy is a significant concern in the digital age, posing challenges and demanding solutions. With the increasing collection and utilization ofpersonal data, protecting individuals privacy has become paramount. Challenges include ensuring consent, securing data storage, and addressing evolving privacy regulations. Solutions involve implementing robust encryption methods, enhancing user control over data, and promoting transparency in data handling practices. Upholding data privacy rights requires collaboration between organizations, policymakers, and individuals to establish a balance between data-driven innovation and safeguarding personal information.'),
  new Post(3, 'The impact of social media on today society', 'https://images.pexels.com/photos/8088443/pexels-photo-8088443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Social media has had a monumental impact on todays society. It has revolutionized communication, connectivity, and the way information is shared. With billions of users worldwide, social media platforms have become powerful tools for networking, socializing, and even conducting business. However, this pervasive influence has its drawbacks. Privacy concerns, cyberbullying, and the addictive nature of social media have emerged as significant challenges. Moreover, the rapid dissemination of fake news and the amplification of echo chambers have led to polarization and societal divisions. As social media continues to evolve, it is crucial to address these issues and foster a more responsible and inclusive digital environment.'),
  new Post(4, 'Blockchain technology: revolutionizing digital trust', 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Blockchain technology is at the forefront of revolutionizing digital trust across industries. With its decentralized and transparent nature, blockchain ensures security, immutability, and accountability in transactions. Beyond cryptocurrencies, it has far-reaching applications in areas such as supply chain management, healthcare, voting systems, and intellectual property rights. By eliminating intermediaries and providing a tamper-proof record of transactions, blockchain fosters trust among participants and reduces the risk of fraud. However, challenges like scalability need to be addressed for widespread adoption. Overall, the transformative potential of blockchain in establishing trust in the digital era is vast and holds promise for a more secure and efficient future.'),
  new Post(5, 'Renewable Energy Technologies: towards a sustainable future', 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Renewable energy technologies are paving the way towards a sustainable future. As the world grapples with the challenges of climate change and depleting fossil fuel resources, the shift towards renewables has become imperative. Solar, wind, hydro, and geothermal power offer clean, abundant, and environmentally friendly alternatives. These technologies have witnessed significant advancements, becoming more efficient and cost-effective over time. By reducing greenhouse gas emissions and dependence on finite resources, renewable energy technologies contribute to mitigating climate change and promoting energy security. As we embrace these sustainable solutions, we move closer to a greener, more resilient future for generations to come.'),
  new Post(6, 'The role of technology in 21st century education', 'https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Technology plays a crucial role in 21st-century education, transforming the way we teach and learn. Digital tools and platforms enhance accessibility, collaboration, and engagement in the classroom. Interactive whiteboards and educational apps provide dynamic and personalized learning experiences. Technology also enables distance learning, breaking down geographical barriers and expanding educational opportunities. Moreover, it equips students with essential digital literacy skills for the modern workforce. However, effective integration and proper digital citizenship education are vital to maximize the benefits of technology in education and ensure equitable access for all learners.'),
];

const commentsPosts: PostDetails[] = [
  new PostDetails(1, 1, 'sarah.williams@example.com: ', 'Artificial Intelligence has truly revolutionized the way businesses operate in the digital age. Its ability to analyze vast amounts of data and make informed decisions in real-time has enabled companies to streamline their processes and improve efficiency.'),
  new PostDetails(1, 1, 'alexander.brown@example.com: ', 'Im amazed at the impact of Artificial Intelligence on digital transformation. From predictive analytics to machine learning algorithms, AI has opened up new possibilities for businesses to gain insights and make data-driven decisions.'),
  new PostDetails(1, 1, 'jacob.harris@example.com: ', 'The ability of AI to analyze data and make informed decisions is revolutionizing industries.'),
  new PostDetails(2, 2, 'john.doe@example.com: ', 'Data privacy has become a paramount concern in todays digital landscape. With the ever-increasing amount of personal information being collected and shared online, its crucial to address the challenges associated with protecting sensitive data. The rise of encryption technologies and stricter data protection regulations have provided some solutions. However, theres still a long way to go.'),
  new PostDetails(2, 2, 'emily.smith@example.com: ', 'In this age of constant data breaches and privacy concerns, finding effective solutions for data privacy is imperative. Its not just about implementing strong security measures, but also fostering a culture of transparency and accountability. Companies should prioritize user consent, clearly communicate data handling practices, and give individuals control over their personal information.'),
  new PostDetails(2, 2, 'ethan.peterson@example.com: ', 'Data privacy concerns demand a balance between innovation and safeguarding personal information.'),
  new PostDetails(3, 3, 'sophia.johnson@example.com: ', 'Social media has undeniably transformed our society, both positively and negatively. On one hand, it has revolutionized communication, connecting people from all corners of the world and allowing for the sharing of ideas and experiences. It has also provided a platform for marginalized voices to be heard. However, the impact of social media goes beyond connectivity.'),
  new PostDetails(3, 3, 'ava.jones@example.com: ', 'The advent of social media has had a profound impact on our society, redefining the way we interact, consume information, and perceive ourselves and others. It has democratized the spread of information, allowing for real-time news updates and facilitating social and political movements.'),
  new PostDetails(3, 3, 'emma.rodriguez@example.com: ', 'The influence of social media on society is undeniable, shaping opinions and fostering global connectivity'),
  new PostDetails(4, 4, 'william.thomas@example.com: ', 'Blockchain technology is reshaping the way we establish trust in the digital realm. By providing a decentralized and immutable ledger, blockchain enables secure and transparent transactions without the need for intermediaries. This has significant implications across various industries, from finance and supply chain management to healthcare and voting systems. '),
  new PostDetails(4, 4, 'lily.moore@example.com: ', 'The advent of blockchain technology has ushered in a new era of digital trust. With its decentralized and tamper-proof nature, blockchain enables secure peer-to-peer transactions, verifiable data records, and smart contracts. This technology has the power to revolutionize industries by increasing transparency, reducing costs, and minimizing the reliance on intermediaries. '),
  new PostDetails(4, 4, 'matthew.thompson@example.com: ', 'The potential applications of blockchain extend beyond finance, transforming various industries.'),
  new PostDetails(5, 5, 'james.miller@example.com: ', 'Renewable energy technologies hold the key to a sustainable future. As we face the challenges of climate change and environmental degradation, transitioning to renewable sources like solar, wind, and hydropower is crucial. These technologies offer clean and abundant energy, reducing our dependence on fossil fuels and mitigating greenhouse gas emissions'),
  new PostDetails(5, 5, 'benjamin.ander@example.com: ', 'The rapid advancement of renewable energy technologies has sparked hope for a sustainable future. Solar panels, wind turbines, and other clean energy solutions are becoming increasingly affordable and efficient.'),
  new PostDetails(5, 5, 'isabella.wilson@example.com: ', 'Renewable energy technologies offer a cleaner and greener alternative to traditional energy sources.'),
  new PostDetails(6, 6, 'david.wilson@example.com: ', 'Technology has revolutionized education in the 21st century, transforming the way we teach and learn. With the integration of digital tools and resources, students now have access to a wealth of information, interactive learning experiences, and collaborative platforms.'),
  new PostDetails(6, 6, 'olivia.davis@example.com: ', 'In the 21st century, technology has become an integral part of education, opening up new possibilities for teaching and learning. Digital devices, educational apps, and online platforms have made education more accessible, flexible, and engaging. Technology facilitates distance learning, collaborative projects, and personalized instruction, catering to diverse learning styles and needs.'),
  new PostDetails(6, 6, 'oliver.green@example.com: ', 'Incorporating technology in education prepares students for the digital demands of the modern world.'),
];

document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('postsContainer');

  if (!postsContainer) return;

  posts.forEach((post, index) => {
    const postElement = document.createElement('div');
    const idDiv = 'div' + index;
    postElement.id = idDiv;

    postElement.addEventListener('click', () => {
      setDetails(post.id);
    });

    postElement.addEventListener('mouseover', () => {
      postElement.style.cursor = 'pointer';
    });

    postElement.addEventListener('mouseout', () => {
      postElement.style.cursor = 'default';
    });
    
    const userPostsElement = document.createElement('p');
    userPostsElement.textContent = 'User posts';
    postElement.appendChild(userPostsElement);
    userPostsElement.classList.add('user-posts');


    const imageElement = document.createElement('img');
    imageElement.src = post.imageUrl;
    postElement.appendChild(imageElement);
    imageElement.classList.add('image-post');

    const titleElement = document.createElement('h3');
    titleElement.textContent = post.title;
    postElement.appendChild(titleElement);
    titleElement.classList.add('title-post');

    const bodyElement = document.createElement('p');
    bodyElement.textContent = post.body;
    postElement.appendChild(bodyElement);
    bodyElement.classList.add('body-post');

    const goExpand = document.createElement('p');
    goExpand.textContent = 'Expand...';
    postElement.appendChild(goExpand);
    goExpand.classList.add('expand-post');

    postsContainer.appendChild(postElement);
  });

  function getPostDetailsId(postId: number): PostDetails[] {
    return commentsPosts.filter((comment) => comment.postId === postId);
  }

  function getPostId(id: number): Post | undefined {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        return posts[i];
      }
    }
    return undefined;
  }

  function setDetails(postId: number) {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;
  
    const post = getPostId(postId);
    if (!post) return;
  
    postsContainer.innerHTML = '';
  
    const postDetailsContainer = document.createElement('div');
    postsContainer.appendChild(postDetailsContainer);
    postDetailsContainer.id = 'div-body2';
  
    const imageElement = document.createElement('img');
    imageElement.src = post.imageUrl;
    postDetailsContainer.appendChild(imageElement);
    imageElement.classList.add('image-comments');
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = post.title;
    postDetailsContainer.appendChild(titleElement);
    titleElement.classList.add('title-comments');
  
    const bodyElement = document.createElement('p');
    bodyElement.textContent = post.body;
    postDetailsContainer.appendChild(bodyElement);
    bodyElement.classList.add('body-comments');
  
    const commentsElement = document.createElement('div');
    postsContainer.appendChild(commentsElement);
    commentsElement.id = 'div-comments';
  
    const postDetails = getPostDetailsId(post.id);
    
    postDetails.forEach((comment, index) => {
      const commentElement = document.createElement('p');

      const emailSpanElement = document.createElement('span');
      emailSpanElement.textContent = `user_ ${index + 1}: ${comment.email}`;
      emailSpanElement.style.fontWeight = 'bold';
      emailSpanElement.classList.add('email-comments');
      commentElement.appendChild(emailSpanElement);
  
      const commentBodyElement = document.createElement('span');
      commentBodyElement.textContent = comment.body;
      commentBodyElement.classList.add('body-comments');
      commentElement.appendChild(commentBodyElement);

      commentsElement.appendChild(commentElement);
    });
    
    const divButton = document.createElement('div');
    const backButton = document.createElement('a');
    const imageButton = document.createElement('img');
    const imageButton2 = document.createElement('img');
    divButton.appendChild(backButton);
    backButton.href = 'index.html';
    imageButton.src = './images/goBack.png';
    imageButton2.src = './images/circleBack.png';
    backButton.appendChild(imageButton);
    backButton.appendChild(imageButton2);
    postDetailsContainer.appendChild(divButton);
    divButton.id = 'div-button';
    imageButton.classList.add('image-button1');
    imageButton2.classList.add('image-button2');
  }
});