import {getAllCompanions} from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import SubjectFilter from "@/components/SubjectFilter";
import SearchInput from "@/components/SearchInput";
import BookmarkComponent from "@/components/BookmarkComponent";
import React from "react";




const CompanionsLibrary=async({searchParams}:SearchParams)=>{
    const filters=await searchParams;
    const subject=filters.subject?filters.subject:'';
    const topic=filters.topic?filters.topic:'';



    const companions=await getAllCompanions({subject,topic});

    return (
       <main>
           <section className='flex justify-center items-center gap-4 max-sm:flex-col'>
               <h1>Companion Library</h1>
               <div className='flex gap-4'><SearchInput/><SubjectFilter/></div>
           </section>
           <section className='companions-grid'>
               {/*{companions.map((companion)=>(*/}
               {/*    <CompanionCard key={companion.id}  {...companion} color={getSubjectColor(companion.subject)}/>*/}
               {/*))}*/}
               <BookmarkComponent companions={companions}/>
           </section>
       </main>
)
}

export default CompanionsLibrary