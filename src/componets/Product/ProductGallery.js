import React from 'react'

export const ProductGallery = ({image}) => {
    return (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <img
                    src={image}
                    alt= 'Sản phẩm'
                    style={{
                        width: "200px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        // boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    }}
                />
        </div>
    )
}
