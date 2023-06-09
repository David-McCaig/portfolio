import React from 'react'

function SkillsTag({skill}) {
    return (
        <div className="flex justify-center mt-4 mr-4 h-11 w-24 overflow-hidden rounded-lg bg-stone-100 text-lg drop-shadow  ">
            <h3 className="mt-2 text-gray-500 dark:text-black">{skill}</h3>
        </div>
    )
}

export default SkillsTag