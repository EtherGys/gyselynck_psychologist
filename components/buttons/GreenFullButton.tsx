import React from 'react'

function GreenFullButton( {content, href} : buttonProps) {
    return (
        <a href={href}>
            <button type="button" className="drop-shadow-lg py-4 px-8 bg-[#689F38] hover:bg-[#BBE090] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center me-2 mb-2">
                {content}
            </button>
        </a>
    )
}

export default GreenFullButton
