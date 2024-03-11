import React from 'react'

function GreenBorderButton({content} : buttonProps) {
    return (
        <>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#9CCC65] focus:outline-none bg-white rounded-full border border-[#9CCC65] hover:bg-[#BBE090] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:text-gray-400 dark:border-gray-600">
                {content}
            </button>
        </>
    )
}

export default GreenBorderButton
