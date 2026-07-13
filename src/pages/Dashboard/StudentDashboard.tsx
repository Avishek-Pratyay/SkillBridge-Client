import {
useEffect,
useState
} from "react";

import {
Link
} from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import {
getMyEnrollments,
getMyPayments
}
from "../../services/paymentService";


const StudentDashboard =()=>{


const {user}=useAuth();


const [courses,setCourses]=useState<any[]>([]);

const [payments,setPayments]=useState<any[]>([]);



useEffect(()=>{

loadData();

},[]);



const loadData=async()=>{

const courseRes =
await getMyEnrollments();


const paymentRes =
await getMyPayments();



setCourses(
courseRes.data
);


setPayments(
paymentRes.data
);

};



return(

<section className="bg-slate-100 min-h-screen py-12">


<div className="max-w-7xl mx-auto px-5">


<div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-3xl p-10 shadow-xl">


<h1 className="text-4xl font-bold">

Welcome Back 👋

</h1>


<p className="mt-3">

{user?.email}

</p>


<p className="mt-2">

Continue your learning journey

</p>


</div>





<div className="grid md:grid-cols-3 gap-6 mt-10">


<div className="bg-white rounded-2xl p-8 text-center shadow">

<h2 className="text-gray-500">

Enrolled Courses

</h2>


<p className="text-4xl font-bold text-blue-600">

{courses.length}

</p>


</div>




<div className="bg-white rounded-2xl p-8 text-center shadow">

<h2 className="text-gray-500">

Payments

</h2>


<p className="text-4xl font-bold text-green-600">

${payments.reduce(
(a,b)=>a+b.amount,0
)}

</p>


</div>



<div className="bg-white rounded-2xl p-8 text-center shadow">

<h2 className="text-gray-500">

Status

</h2>


<p className="text-3xl font-bold text-purple-600">

Active

</p>


</div>



</div>





<div className="bg-white rounded-3xl shadow p-10 mt-10">


<h2 className="text-3xl font-bold mb-8">

My Enrolled Courses 🎓

</h2>



{
courses.length===0 ?

<p>
No courses enrolled yet.
</p>

:

courses.map(course=>(


<div
key={course._id}
className="border rounded-xl p-5 mb-5 flex justify-between items-center"
>


<div>

<h3 className="text-xl font-bold">

{course.title}

</h3>


<p className="text-gray-500">

{course.category}

</p>


</div>


<Link

to={`/course/${course._id}`}

className="bg-blue-600 text-white px-5 py-3 rounded-xl"

>

Continue Learning 🎓

</Link>



</div>


))

}



</div>





<div className="bg-white rounded-3xl shadow p-10 mt-10">


<h2 className="text-3xl font-bold mb-6">

Payment History 💳

</h2>



{
payments.map(payment=>(

<div
key={payment._id}
className="border-b py-4"
>


<p>

Amount:
<b>
 ${payment.amount}
</b>

</p>


<p className="text-gray-500">

{new Date(
payment.paidAt
).toLocaleDateString()}

</p>


</div>


))
}



</div>



</div>


</section>


);


};


export default StudentDashboard;