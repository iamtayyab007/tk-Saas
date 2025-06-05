'use client'
import {useBookmark} from "@/app/Context/BookmarkContext";
import CompanionCard from './CompanionCard'
import { getSubjectColor } from '@/lib/utils'

interface Props {
    companions: Companion[] // Your type
}

const BookmarkedCompanions = ({ companions }: Props) => {
    const { bookmarked } = useBookmark()
console.log(companions)
    const filtered = companions.filter(c => bookmarked.includes(c.id))

    if (filtered.length === 0) {
        return <p>No bookmarked companions yet.</p>
    }

    return (
        <section className='home-section'>
            {filtered.map(companion => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}
        </section>
    )
}

export default BookmarkedCompanions
