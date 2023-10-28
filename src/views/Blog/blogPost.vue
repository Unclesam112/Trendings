<template>
    <main>

        <div class="header">
            <headerVue />
        </div>

        <div class="navbar">
            <navbar />
        </div>




        <div class="container md:p-10 p-5 pt-5">
            <div class="nav mb-8">

                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="#"
                                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#"
                                    class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            </div>__
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-2 col">
                    <h1 class="md:text-3xl lg:text-5xl text-2xl pb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati impedit velit totam?
                    </h1>

                    <small class="text-gray-400 flex text-md mb-3 pt-1">
                        <span>
                            <Icon icon="mingcute:user-4-fill" color="skyblue" width="28" />
                        </span> <span class="mt-1 mx-1">By Admin</span>
                        <Icon icon="mdi:clock-outline" color="skyblue" class="mt-2 ml-4" />
                        <span class="mx-1 mt-1">October 24, 2023</span>
                    </small>
                    <img src="../../assets/img/img.jpg" alt="" class="rounded">

                    <div class="flex my-3">
                        <span class="text-gray-600"> 
                            <span class="text-red-700 text-3xl font-bold">0</span>
                            Shares</span>
                        <a class="bg-blue-500 hover:bg-blue-600 ml-3 text-white px-3 py-1 rounded flex transition duration-300">
                            <Icon icon="ri:facebook-fill" class="mt-1"/> <span class="mx-2 hidden md:block">Facebook</span>
                        </a>

                        <a class="bg-green-500 hover:bg-green-600 mx-2 text-white px-3 py-1 rounded flex transition duration-300">
                            <Icon icon="ic:baseline-whatsapp" class="mt-1"/> <span class="mx-2 hidden md:block">Whatsapp</span>
                        </a>

                        <a class="bg-blue-400 hover:bg-blue-400 text-white px-3 py-1 rounded flex transition duration-300">
                            <Icon icon="mdi:twitter" class="mt-1 "/> <span class="mx-2 hidden md:block"> Twitter</span>
                        </a>
                    </div>
                    <div class="text-left my-3">


                        <p class="text-gray-700 text-md py-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptatibus excepturi, et
                            quidem, corporis aliquam in suscipit laboriosam provident nam incidunt fugiat amet perferendis!
                            Molestias aliquid veniam laudantium nobis placeat, odit natus itaque culpa architecto impedit!
                            Molestias eos nisi, maiores fugit neque dolorum ut voluptates quam at dolores earum adipisci
                            laudantium, vero tempore excepturi? Odio eaque illo totam aliquam, consequatur dicta neque
                            excepturi perspiciatis dolorum eveniet saepe dolor iste impedit sapiente, at suscipit! Harum
                            veritatis, exercitationem provident soluta nostrum perferendis molestias vero dolore voluptatum,
                            asperiores praesentium, sint ex corporis a!
                            <br />
                            <br />

                            Perspiciatis placeat aliquid mollitia voluptas aspernatur, itaque consectetur consequuntur quam,
                            dicta alias quod quasi nesciunt ratione non ea? Aliquid animi doloribus corporis quis maxime
                            cumque debitis numquam dolor sequi assumenda consequatur natus, voluptates at, quia iusto
                            explicabo quibusdam tempora delectus sapiente optio nostrum placeat ad harum atque. Inventore
                            incidunt debitis eos magni soluta blanditiis, autem iste facere tenetur quo exercitationem?
                        </p>
                        <div class="flex">
                        <span class="text-red-600 mr-5"> 
                          
                            Shares this:</span>
                        <a class="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 rounded-full text-center pt-1 pl-2 transition duration-300">
                            <Icon icon="ri:facebook-fill" class="mt-1"/>
                        </a>

                        <a class="bg-green-500 mx-2 hover:bg-green-600 w-8 h-8 text-white rounded-full  pt-1 pl-2 transition duration-300">
                            <Icon icon="ic:baseline-whatsapp" class="mt-1"/>
                        </a>

                        <a class="bg-blue-400 hover:bg-blue-400  pt-1 pl-2 w-8 h-8 text-white p rounded-full transition duration-300">
                            <Icon icon="mdi:twitter" class="mt-1"/>
                        </a>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="follow w-100 bg-gray-300 px-10 py-10 pt-5 rounded">
                        <h6 class="text-1xl">Follow us</h6>
                        <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div class="socials my-3 flex">
                            <div class="handle bg-black rounded-full w-8 h-8 pl-2 pt-2 mr-2">
                                <Icon icon="ri:facebook-fill" color="white" />
                            </div>
                            <div class="handle bg-black rounded-full w-8 h-8 pl-2 pt-2 mr-2">
                                <Icon icon="ri:facebook-fill" color="white" />
                            </div>
                            <div class="handle bg-black rounded-full w-8 h-8 pl-2 pt-2 mr-2">
                                <Icon icon="ri:facebook-fill" color="white" />
                            </div>
                            <div class="handle bg-black rounded-full w-8 h-8 pl-2 pt-2 mr-2">
                                <Icon icon="ri:facebook-fill" color="white" />
                            </div>
                        </div>

                        <hr class="bg-gray-900 border border-gray-500 border-1 text-gray-900" />

                        <h6 class="text-1xl pt-3">Get latest new delivered daily</h6>
                        <p class="text-gray-500">Lorem ipsum dolor sit amet.</p>

                        <form class="flex items-center mt-3">
                            <label for="voice-search" class="sr-only">Search</label>
                            <div class="relative w-full">

                                <input type="text" id="voice-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" required>

                            </div>
                            <button type="submit"
                                class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Subscribe
                            </button>
                        </form>

                    </div>

                    <div class="latest-post p-2 shadow">
                        <div class="my-3 mt-8 py-1 mb-8 border-l-4 border border-l-blue-500">
                            <h1 class="text-left md:text-3xl text-lg  font-bold pl-2">Latest Posts</h1>

                        </div>
                        <div class="block-1">
                            <div class="relative">
                                <div class="relative group">
                                    <img src="../../assets/img/img.jpg" alt="" class="w-100 border border-2-gray-500">
                                    <div
                                        class="absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:opacity-75 transition-opacity">
                                    </div>
                                    <div class="absolute bottom-3 left-0 p-4 text-white text-md pr-10">
                                        <span
                                            class="bg-green-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Entertainment</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                        <small class="text-gray-400 flex text-xs mt-3">
                                            <span>
                                                <Icon icon="mdi:user" color="skyblue" class="mt-1" />
                                            </span>&nbsp;By Admin&nbsp;&bull;
                                            <Icon icon="mdi:clock-outline" color="skyblue" class="mt-1 ml-4" />
                                            <span class="mx-1">October 24, 2023</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div class="rest my-5">

                                <a href="#"
                                    class=" flex flex-row items-center bg-white md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-32 h-25 md:w-32" src="../../assets/img/img.jpg" alt="">
                                    <div class="flex flex-col justify-between p-4 pt-0 leading-normal">
                                        <h5 class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021</h5>
                                        <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400"></p>
                                        <small class="text-gray-400 flex">
                                            <Icon icon="mdi:clock-outline" color="skyblue" class="mt-1" /> <span
                                                class="mx-1">October 24, 2023</span>
                                        </small>
                                    </div>
                                </a>

                                <a href="#"
                                    class=" flex flex-row items-center bg-white md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-32  h-25 md:w-32" src="../../assets/img/img.jpg" alt="">
                                    <div class="flex flex-col justify-between p-4 pt-0 leading-normal">
                                        <h5 class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021</h5>
                                        <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400"></p>
                                        <small class="text-gray-400 flex">
                                            <Icon icon="mdi:clock-outline" color="skyblue" class="mt-1" /> <span
                                                class="mx-1">October 24, 2023</span>
                                        </small>
                                    </div>
                                </a>

                                <a href="#"
                                    class=" flex flex-row items-center bg-white md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-32  h-25 md:w-32" src="../../assets/img/img.jpg" alt="">
                                    <div class="flex flex-col justify-between p-4 pt-0 leading-normal">
                                        <h5 class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021</h5>
                                        <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400"></p>
                                        <small class="text-gray-400 flex">
                                            <Icon icon="mdi:clock-outline" color="skyblue" class="mt-1" /> <span
                                                class="mx-1">October 24, 2023</span>
                                        </small>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="widget-3 ">
                <div class="container">
                    <div class="flex py-1 mb-8 border-l-4 border border-l-blue-500">
                        <h1 class="text-left md:text-3xl text-lg font-bold pl-2">Related</h1>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="col">
                            <div class="block-1">

                                <img src="../../assets/img/img.jpg" alt="" class="w-100 object-cover rounded">

                                <div
                                    class="max-w-sm p-6 pt-0 bg-white pl-2 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <small class="text-gray-400 flex text-xs my-3">
                                            <span>
                                                <Icon icon="mdi:user" color="skyblue" class="mt-1" />
                                            </span>&nbsp;By Admin&nbsp;&bull;
                                            <Icon icon="mdi:clock-outline" color="skyblue" class="mt-1 ml-4" />
                                            <span class="mx-1">October 24, 2023</span>
                                        </small>
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the
                                        biggest enterprise technology acquisitions of 2021 so far, in reverse
                                        chronological order.</p>
                                    <a href="#"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-left text-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>


                        <div class="col">
                            <div class="block-1">

                                <img src="../../assets/img/img.jpg" alt="" class="w-100 object-cover rounded">

                                <div
                                    class="max-w-sm p-6 pt-0 bg-white pl-2 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <small class="text-gray-400 flex text-xs my-3">
                                            <span>
                                                <Icon icon="mdi:user" color="skyblue" class="mt-1" />
                                            </span>&nbsp;By Admin&nbsp;&bull;
                                            <Icon icon="mdi:clock-outline" color="skyblue" class="mt-1 ml-4" />
                                            <span class="mx-1">October 24, 2023</span>
                                        </small>
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the
                                        biggest enterprise technology acquisitions of 2021 so far, in reverse
                                        chronological order.</p>
                                    <a href="#"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-left text-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>


                        <div class="col">
                            <div class="block-1">

                                <img src="../../assets/img/img.jpg" alt="" class="w-100 object-cover rounded">

                                <div
                                    class="max-w-sm p-6 pt-0 bg-white pl-2 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <small class="text-gray-400 flex text-xs my-3">
                                            <span>
                                                <Icon icon="mdi:user" color="skyblue" class="mt-1" />
                                            </span>&nbsp;By Admin&nbsp;&bull;
                                            <Icon icon="mdi:clock-outline" color="skyblue" class="mt-1 ml-4" />
                                            <span class="mx-1">October 24, 2023</span>
                                        </small>
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the
                                        biggest enterprise technology acquisitions of 2021 so far, in reverse
                                        chronological order.</p>
                                    <a href="#"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-left text-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>


                        <div class="col">
                            <div class="block-1">

                                <img src="../../assets/img/img.jpg" alt="" class="w-100 object-cover rounded">

                                <div
                                    class="max-w-sm p-6 pt-0 bg-white pl-2 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <small class="text-gray-400 flex text-xs my-3">
                                            <span>
                                                <Icon icon="mdi:user" color="skyblue" class="mt-1" />
                                            </span>&nbsp;By Admin&nbsp;&bull;
                                            <Icon icon="mdi:clock-outline" color="skyblue" class="mt-1 ml-4" />
                                            <span class="mx-1">October 24, 2023</span>
                                        </small>
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the
                                        biggest enterprise technology acquisitions of 2021 so far, in reverse
                                        chronological order.</p>
                                    <a href="#"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-left text-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="comment">
                <h1 class="text-5xl py-3">
                    Leave a reply
                </h1>

<form>
   <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>
           <div class="flex pl-0 space-x-1 sm:pl-2">
               <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                    </svg>
                   <span class="sr-only">Attach file</span>
               </button>
               <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                    </svg>
                   <span class="sr-only">Set location</span>
               </button>
               <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                   <span class="sr-only">Upload image</span>
               </button>
           </div>
       </div>
   </div>
</form>
<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>

            </div>
        </div>

        <div class="footer">
            <footerVue />
        </div>
    </main>
</template>

<script>
import { Icon } from '@iconify/vue'
import footerVue from '../../components/layout/footer.vue'
import navbar from '../../components/layout/navbar.vue'
import headerVue from '../../components/layout/header.vue'

export default {
    components: {
        navbar,
        footerVue,
        Icon,
        headerVue
    },

    data() {
        return {

        }
    },
}
</script>

<style></style>