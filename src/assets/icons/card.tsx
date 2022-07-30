import React from 'react';
import colors from 'styles/colors';

export default function IconCard(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.2 6H6.8C5.92692 6 5.39239 6.00156 4.99247 6.03423C4.80617 6.04945 4.69345 6.06857 4.625 6.08469C4.59244 6.09236 4.57241 6.09879 4.56158 6.10265C4.55118 6.10636 4.54601 6.10899 4.54601 6.10899C4.35785 6.20487 4.20487 6.35785 4.10899 6.54601C4.10899 6.54601 4.10636 6.55118 4.10265 6.56158C4.09879 6.57241 4.09236 6.59244 4.08469 6.625C4.06857 6.69345 4.04945 6.80617 4.03423 6.99247C4.01297 7.25263 4.00489 7.56976 4.00183 8H19.9982C19.9951 7.56976 19.987 7.25263 19.9658 6.99247C19.9505 6.80617 19.9314 6.69345 19.9153 6.625C19.9076 6.59244 19.9012 6.57241 19.8973 6.56158C19.8936 6.55118 19.891 6.54601 19.891 6.54601C19.7951 6.35785 19.6422 6.20487 19.454 6.10899C19.454 6.10899 19.4488 6.10636 19.4384 6.10265C19.4276 6.09879 19.4076 6.09236 19.375 6.08469C19.3065 6.06857 19.1938 6.04945 19.0075 6.03423C18.6076 6.00156 18.0731 6 17.2 6ZM2 15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8H21.9983C21.9902 6.83507 21.9434 6.16873 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2.05658 6.16873 2.00979 6.83507 2.00169 8H2V15.2ZM20 15.2V10H4V15.2C4 16.0731 4.00156 16.6076 4.03423 17.0075C4.04945 17.1938 4.06857 17.3065 4.08469 17.375C4.09236 17.4076 4.09879 17.4276 4.10265 17.4384C4.10636 17.4488 4.10899 17.454 4.10899 17.454C4.20487 17.6422 4.35785 17.7951 4.54601 17.891C4.54601 17.891 4.55118 17.8936 4.56158 17.8973C4.57241 17.9012 4.59244 17.9076 4.625 17.9153C4.69345 17.9314 4.80617 17.9505 4.99247 17.9658C5.39239 17.9984 5.92692 18 6.8 18H17.2C18.0731 18 18.6076 17.9984 19.0075 17.9658C19.1938 17.9505 19.3065 17.9314 19.375 17.9153C19.4076 17.9076 19.4276 17.9012 19.4384 17.8973C19.4488 17.8936 19.454 17.891 19.454 17.891C19.6422 17.7951 19.7951 17.6422 19.891 17.454C19.891 17.454 19.8936 17.4488 19.8973 17.4384C19.9012 17.4276 19.9076 17.4076 19.9153 17.375C19.9314 17.3065 19.9505 17.1938 19.9658 17.0075C19.9984 16.6076 20 16.0731 20 15.2ZM10 12H6V14H10V12Z" fill={color} />
        </svg>
    )
}
