import useTitle from "../../hook/useTitle";


const Blog = () => {
    useTitle('Blogs')
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-8">QUESTIONS</h2>
            <div className="border p-4 m-8 bg-base-200">
                <h2 className="text-2xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="text-xl font-semibold">
                    An access token and a refresh token are commonly used in authentication systems to provide secure access to resources and extend the validity of an authentication session. <br />  An access token is a credential that is issued to a client (such as a web or mobile application) by an authentication server upon successful authentication. It represents the client authorization to access protected resources. <br /> A refresh token is also issued by the authentication server but serves a different purpose. It is a long-lived credential that is used to obtain a new access token once the current one expires. </p>
            </div>
            <div className="border p-4 m-8 bg-base-200">
                <h2 className="text-2xl font-bold">Compare SQL and NoSQL databases?</h2>
                <p className="text-xl font-semibold">SQL (Structured Query Language) and NoSQL (Not Only SQL) are two distinct types of databases that serve different purposes and have different characteristics. <br /> SQL databases follow a rigid, structured, and predefined schema. Data is organized in tables with rows and columns, and relationships between tables are defined using foreign keys. SQL databases use a standardized query language (SQL) for defining and manipulating data. <br /> NoSQL databases provide a flexible and dynamic schema. They can handle unstructured and semi-structured data, such as JSON, XML, key-value pairs, graphs, or documents.NoSQL databases are suitable for scenarios that involve large-scale data, rapid development, flexible schema requirements, and high availability, such as real-time analytics, social networks, content caching </p>
            </div>
            <div className="border p-4 m-8 bg-base-200">
                <h2 className="text-2xl font-bold">What is express js? What is Nest JS?</h2>
                <p className="text-xl font-semibold">Express.js and Nest.js are both popular frameworks used for building web applications and APIs in Node.js. While they serve similar purposes, they have different approaches and features. <br /> Express.js is a minimalist web application framework for Node.js. It provides a simple and un-opinionated way to build web applications and APIs. Express.js focuses on being lightweight and flexible, allowing developers to have more control over the application structure and implementation. <br /> Nest.js is well-suited for larger applications that require a structured and scalable architecture, maintainability, and testability. It is often used to build enterprise-grade APIs, server-side applications, and microservices. </p>
            </div>
            <div className="border p-4 m-8 bg-base-200">
                <h2 className="text-2xl font-bold">What is MongoDB aggregate and how does it work?</h2>
                <p className="text-xl font-semibold">In MongoDB, the aggregate function is a powerful tool for performing complex data analysis and aggregations on collections. It allows you to process documents within a collection, perform transformations, and compute aggregated results based on a set of defined stages. <br /> The aggregate function follows a pipeline approach, where you can specify a sequence of stages that define the data processing steps. Each stage takes the input from the previous stage, processes it, and passes the result to the next stage. The MongoDB aggregate function offers a powerful set of tools for performing complex data transformations, aggregations, and analysis.  </p>
            </div>
        </div>
    );
};

export default Blog;