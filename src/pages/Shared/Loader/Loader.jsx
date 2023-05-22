import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <div className="max-w-6xl mx-auto px-6 md:px-4 py-14 md:py-20">
        <ContentLoader
            speed={2}
            width={1200}
            height={600}
            viewBox="0 0 1200 600"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="4" y="38" rx="0" ry="0" width="540" height="44" />
            <rect x="4" y="109" rx="0" ry="0" width="540" height="44" />
            <rect x="4" y="183" rx="0" ry="0" width="540" height="44" />
            <rect x="5" y="260" rx="0" ry="0" width="540" height="44" />
            <rect x="586" y="36" rx="0" ry="0" width="540" height="44" />
            <rect x="586" y="107" rx="0" ry="0" width="540" height="44" />
            <rect x="586" y="181" rx="0" ry="0" width="540" height="44" />
            <rect x="587" y="258" rx="0" ry="0" width="540" height="44" />
            <rect x="7" y="337" rx="0" ry="0" width="934" height="49" />
            <rect x="7" y="420" rx="0" ry="0" width="140" height="44" />
        </ContentLoader>
    </div>
)

export default Loader

