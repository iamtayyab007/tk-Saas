'use client'
import React, {useEffect, useState} from 'react';
import {subjects} from "@/constants";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";

const SubjectFilter=()=>{
const pathname=usePathname()
    const searchParams=useSearchParams();
    const router=useRouter();
    const[selectSubject,setSelectSubject]=useState('');

useEffect(()=>{
    const debounceFn=setTimeout(()=>{


        if(selectSubject){

            if(selectSubject==='all') return router.push('/companions',{scroll:false});
            const newUrl=formUrlQuery({
                params:searchParams.toString(),
                key:"subject",
                value:selectSubject
            })
            router.push(newUrl,{scroll:false});
        }else {
            if(pathname ==='/companions'){
                const newUrl=removeKeysFromUrlQuery({
                    params:searchParams.toString(),
                    keysToRemove:['subject'],

                })

                router.push(newUrl,{scroll:false});
            }
        }
    },500)
    },[selectSubject])




    return (
        <Select onValueChange={setSelectSubject} defaultValue={selectSubject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Subjects</SelectLabel>
                    <SelectItem value="all">All Subjects</SelectItem>
                    {subjects.map((subject) => (
                        <SelectItem value={subject} key={subject}> {subject}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SubjectFilter