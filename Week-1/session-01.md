# **What is a protocol stack, and how is it used in web development?**
Protocols are a set of rules that each participating entity has to follow, so that data can flow seamlessly and not depend/change based on underlying software/hardware used. A protocol stack is a group of protocols running at different layers to facilitate end-to-end communication between client and server. 

In web development, the protocol stack has 4 layers and is called the TCP/IP protocol stack. TCP/IP breaks each message into packets, send them through a specific route and those packets are then reassembled on the other end. The packets may take different routes to reach the destination.

![Web Protocol Stack](<protocol stack.svg>)

Each layer has a different function :
1. **Application Layer** - This is the top-most layer where applications make use of protocols like Hypertext Transfer Protocol (HTTP), TLS (Transport Layer Security) and DNS (Domain Name Server) to perform desired functions with the data received from lower layers. Many more protocols like Secure File Transfer Protocol(SFTP) and Simple Mail Transfer Protocols (SMTP) are also part of this layer.
1. **Transport Layer** - The transport layer is what provides a reliable data connection between two devices. It divides the data in packets, acknowledges the packets that it has received from the other device, and makes sure that the other device acknowledges the packets it receives. Some protocols that are part of this layer are Transmission Control Protocol (TCP) and User Datagram Protocol (UDP).
1. **Network Layer** - The network layers controls the movement of packets around the network. The route between any two computers on the Internet isn't just a straight path from A to B. The data packets must pass from router to router until they finally reaches their destination, a strategy that comes from the Internet routing protocol (IP).
1. **Link Layer**- The Data Link layer or Link Layer handles the physical or hardware part of sending the data electronically through cables and other devices. They send electromagnetic signals either over a wired or wireless connection and interpret the signal as bits. 


# **What are the different types of web servers, and how do they differ in terms of functionality and performance?**
A web server is an Internet server that responds to HTTP requests for delivering content and services.

![Types of Web Servers](types-of-web-servers-1.png)

There are four most used types of web servers – Apache, IIS, Nginx and LiteSpeed. 

1. **Apache HTTP Server**: Apache is one of the most popular and widely used web servers. It is an open-source server software that runs on various operating systems. It is highly stable as compared to other web servers and the administrative issues on it can be resolved easily.

1. **Nginx** : Nginx is the next open source web server after Apache. The significant features offered by Nginx are high performance, stability, simple configuration and low resource usage. Because its roots are in performance optimization under scale, Nginx often outperforms other popular web servers in benchmark tests, especially in situations with static content and/or high concurrent requests.

1. **Microsoft Internet Information Services (IIS)**: Internet Information Services (IIS) is a flexible, general-purpose web server from Microsoft that runs on Windows systems to serve requested HTML pages or files. It is not open-source and only runs on Windows OS unlike Apache.

1. **Litespeed** - LiteSpeed Web Server is an Apache replacement from LiteSpeed Technologies. It can securely handle thousands of concurrent clients while consuming minimal memory and CPU. It claims to be doubly more efficient than Apache.


# **What is web hosting, and what are the different types of hosting services available for websites?**
Web hosting is the process where a web hosting provider stores and maintains website files and applications on a server to make its customers' websites accessible on the internet. It is basically a computer that runs 24/7 and responds to HTTP requests received from browser with the required files. 

The different types of web hosting services are : 

1. **Shared hosting**
In this type of hosting mechanism, you may share server space with other websites that are similar in size or purpose. To assure that visitors redirect to the right website and that data sharing remains safe, shared hosting service providers incorporate robust security measures on these servers. For smaller websites like portfolio sites, shared hosting is less expensive than other alternatives. One major disadvantage of this choice is that you can not alter the server's composition or operation mechanisms because you share server space with other websites.

1. **Virtual private server (VPS) hosting**
Virtual private server hosting or VPS is a type of hosting in which the provider builds a virtual specialised server that works specifically for a client. The VPS may pull its RAM and other resources from multiple physical servers. In such an arrangement, although your site and other sites have access to the same resources, your data is still separate from the data of other sites.

1. **Dedicated server hosting**
Hosting on a dedicated server entails having a server system all to yourself using none of another website's storage or resources. Large corporate enterprises with heavy web traffic, a requirement for high functionality, quick server response times and better security, usually choose this alternative. 

1. **Cloud hosting**
Cloud servers allow for the sharing of memory and processing power across linked (virtual) servers. Cloud server can be shared among many users over an accessible platform, often through a network such as the internet. A traditional (dedicated) server is only accessed by a given company or entity. While cloud servers perform the same functions as physical servers, cloud servers are hosted and delivered over a network rather than set up and managed on site. Cloud servers offers unlimited compute capacity and can be easily scaled up or down based on requirement.


# **What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?**
Simply put, server scaling is the process of adjusting and expanding the current server configuration to boost the server’s performance. As a result, server scaling allows the server to effectively handle a larger number of incoming requests and manage an increased workload.

Scaling is important for web applications for several reasons:

**Performance**: Scaling ensures that the application can handle increased traffic and load without becoming slow or unresponsive. It helps maintain a smooth user experience and prevents performance degradation during peak usage periods. This is specially helpful for e-commerce websites that run sales and offers from time to time and witness variation in traffic.
**Reliability and Availability**: Scaling enhances the reliability and availability of web applications. By distributing the workload across multiple servers or resources, it reduces the risk of server failures or downtime. If one server goes down, the application can continue to operate seamlessly.
**Flexibility and Future Growth**: Scalability allows web applications to adapt to changing requirements and accommodate future growth. As the user base expands or the application demands increase, scaling ensures that the infrastructure can support the growing needs of the application without disruption.

There are two primary approaches to scaling: vertical scaling and horizontal scaling.

![Vertical vs Horizontal Scaling](horizontal-vs-vertical-scaling-diagram-1.png)

**Vertical Scaling**: Vertical scaling is achieved by adding more hardware components to the current server configuration (e.g. by adding more RAM or storage to the server).
**Horizontal Scaling**: The horizontal scaling approach entails adding more machines to further distribute the load of the database and increase overall storage and/or processing power. 


# **What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?**
SEO stands for “search engine optimization.” It’s the practice of increasing both the quality and quantity of website traffic through organic search engine results. Following SEO best makes search engine crawlers understand our website better and target the right audience towards our website. 

Following are some methods by which web developers can optimize their websites for better search engine rankings :

1. Quality Content and UI- The website content should be original, packed with useful information that will make the user experience engaging. The User Interface of the website should be easy-t0-use and attractive. This reduces bounce rates and helps search engines identify quality content.
1. Keyword Research - Researching what the users are searching about and picking the right keywords plays an important role in SEO. It is recommended to select few quality keywords that drive high traffic and optimise the headings and website content based on those keywords.
1. Metadata and Schema Markup - We need to Uilize appropriate meta tags (like title, description) and schema markup to provide additional information about our content to search engines. This can enhance the visibility of your website in SERPs and improve click-through rates.


Resources : 
1. https://www.milesweb.in/blog/hosting/web-server-types-web-servers/
1. https://www.techtarget.com/whatis/definition/hosting-Web-site-hosting-Web-hosting-and-Webhosting#:~:text=Web%20hosting%20%2D%2D%20also%20known,websites%20accessible%20on%20the%20internet.
1. https://www.redswitches.com/blog/server-scaling/#:~:text=Simply%20put%2C%20server%20scaling%20is,and%20manage%20an%20increased%20workload.
1. https://moz.com/beginners-guide-to-seo/why-search-engine-marketing-is-necessary
