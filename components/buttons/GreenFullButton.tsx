import React from 'react'

function GreenFullButton( {content} : contentProps) {
    return (
        <>
            <button type="button" className="flex flex-row py-3 bg-[#689F38] hover:bg-[#BBE090] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center me-2 mb-2">
                {content}
            </button>
        </>
    )
}

export default GreenFullButton
