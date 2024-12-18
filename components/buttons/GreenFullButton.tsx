import React from 'react'

function GreenFullButton( {content, href, target} : buttonProps) {
    return (
        <a target={target} href={href}>
            <button type="button" className="drop-shadow-lg py-4 px-8 bg-[#689F38] hover:bg-[#BBE090]  font-medium rounded-full text-sm text-center me-2 mb-2">
                {content}
            </button>
        </a>
    )
}

export default GreenFullButton
