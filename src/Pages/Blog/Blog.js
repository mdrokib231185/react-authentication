import React from 'react';
import './Blog.css'

const Blog = () => {
      return (
        <div className='container' id='blog-container'>
          <h1>Ans 1:Authentication and Authorization different </h1>
          <h1>Atuhentication</h1>
          <p>
            1. প্রমাণীকরণ ব্যবহারকারী কে তা যাচাই করে। 2.পাসওয়ার্ড, ওয়ান-টাইম
            পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত
            অন্যান্য তথ্যের মাধ্যমে প্রমাণীকরণ কাজ করে।3.প্রমাণীকরণ একটি ভাল
            পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ।4.প্রমাণীকরণ
            ব্যবহারকারীর দ্বারা দৃশ্যমান এবং আংশিকভাবে পরিবর্তনযোগ্য।
          </p>
          <h1>Authorization</h1>
          <p>
            1.অনুমোদন নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে
            পারে। 2.অনুমোদন সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা
            বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।3.অনুমোদন সর্বদা প্রমাণীকরণের
            পরে সঞ্চালিত হয়।4. ব্যবহারকারীর কাছে দৃশ্যমান বা পরিবর্তনযোগ্য নয়।
          </p>

          <h1>Ans : 2 Why Firebase using</h1>
          <p>
            There are many uses of Firebase. Some of them are, 1. Incredibly
            Built-In Analytics. 2. Authentication: Have a lot less friction with
            acclaimed authentication. 3. Hosting: Deliver web content faster. 4.
            Remote Configuration: Customize your app on the go. 5. Storage: File
            storing made easy. The other options to implement authentication
            are, Cookie-Based authentication Token-Based authentication Third
            party access(OAuth, API-token) OpenId SAML
          </p>
          <h1> Ans: 3
            What other services does firebase provide other than authentication
          </h1>
          <p>
            Answer: Yes, Firebase also provides other services. Firebase
            provides tools for tracking analytics, reporting and fixing app
            crashes, creating marketing and product experiment. Firebase also
            services us Analytics, Cloud messaging, Realtime database,
            Crashlytics, Performance, Test lab and so on.
          </p>
        </div>
      );
};

export default Blog;