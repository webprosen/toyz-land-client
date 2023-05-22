import React from 'react';

const Questions = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20'>
                <h2 className='text-3xl text-center font-bold text-[#e20d19] mb-10 uppercase'>Questions & Answers</h2>

                <div className="mb-5 bg-pink-100 p-6 md:p-8 rounded-lg border-l-4 border-red-600 text-gray-900" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                    <h4 className="text-xl font-bold mb-2">
                        1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h4>
                    <p className=''>
                        - An access token is a credential that is issued by an authentication server after a user successfully authenticates and authorizes an application. It is used to access protected resources, such as APIs, on behalf of the authenticated user.<br className='mb-2'></br>
                        - A refresh token is a credential that is also issued by the authentication server along with the access token. Its purpose is to obtain a new access token when the current one expires, without requiring the user to re-authenticate.<br className='mb-2'></br>
                        - It is recommended to store refresh tokens in a server-side session or use a secure HTTP-only cookie. This helps reduce the risk of unauthorized access to refresh tokens from malicious JavaScript or other client-side vulnerabilities.
                    </p>
                </div>
                <div className="mb-5 bg-pink-100 p-6 md:p-8 rounded-lg border-l-4 border-red-600 text-gray-900" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                    <h4 className="text-xl font-bold mb-2">
                        2. Compare SQL and NoSQL databases?
                    </h4>
                    <p className=''>
                        - SQL databases are based on a relational data model. They organize data into tables with predefined schemas, where relationships between tables are established using keys. Each row in a table represents a record, and columns define the attributes of the records.<br className='mb-2'></br>
                        - NoSQL databases use various data models, such as key-value, document, columnar, or graph. They offer flexibility in data representation and do not require predefined schemas. NoSQL databases are often schema-less, allowing for dynamic and unstructured data.
                    </p>
                </div>

                <div className="mb-5 bg-pink-100 p-6 md:p-8 rounded-lg border-l-4 border-red-600 text-gray-900" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                    <h4 className="text-xl font-bold mb-2">
                        3. What is express js? What is Nest JS?
                    </h4>
                    <p className=''>
                        - Express.js is a fast and minimalist web framework for Node.js. It provides a simple and unopinionated approach to building web applications and APIs.<br className='mb-2'></br>
                        - Nest.js is a progressive Node.js framework built with TypeScript. It takes inspiration from Angular's architecture and applies it to server-side development, providing a structured and scalable approach. Nest.js is built on top of Express.js, which means it inherits the underlying features and performance of Express.js while adding additional layers of abstraction and features.
                    </p>
                </div>

                <div className="mb-5 bg-pink-100 p-6 md:p-8 rounded-lg border-l-4 border-red-600 text-gray-900" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                    <h4 className="text-xl font-bold mb-2">
                        4. What is MongoDB aggregate and how does it work?
                    </h4>
                    <p className=''>
                        - In MongoDB, the aggregate framework is a powerful tool that allows for advanced data processing and analysis. It enables you to perform complex data transformations, aggregations, and computations on the data stored in MongoDB collections.<br className='mb-2'></br>
                        - $match: Filters the documents based on specified conditions, similar to the find operation.<br className='mb-2'></br>
                        - $group: Groups the documents based on specified keys and performs aggregations on the grouped data.<br className='mb-2'></br>
                        - $project: Reshapes the documents by specifying the fields to include or exclude, and creating computed fields.<br className='mb-2'></br>
                        - $sort: Sorts the documents based on specified criteria.<br className='mb-2'></br>
                        - $limit: Restricts the number of documents in the output.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Questions;