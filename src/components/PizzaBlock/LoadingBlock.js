import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingBlock = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={260}
            height={598}
            viewBox="0 0 260 598"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="130" cy="130" r="130" />
            <rect x="0" y="277" rx="10" ry="10" width="260" height="20" />
            <rect x="0" y="318" rx="10" ry="10" width="260" height="70" />
            <rect x="0" y="410" rx="10" ry="10" width="260" height="73" />
            <rect x="0" y="500" rx="20" ry="20" width="80" height="40" />
            <rect x="107" y="500" rx="20" ry="20" width="151" height="40" />
        </ContentLoader>
    )
}

export default LoadingBlock
