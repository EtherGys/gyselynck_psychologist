import React from 'react'

function GrayBorderButton({content} : buttonProps) {
    return (
        <>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-full border border-black hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:text-gray-400 dark:border-gray-600">
                {content}
            </button>
        </>
    )
}

export default GrayBorderButton
