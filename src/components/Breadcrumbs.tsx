import React, {JSX} from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { cakeBusinessConfig } from '@/lib/cake-business-config';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps): JSX.Element {
    return (
        <nav className={`flex ${className}`} aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 md:space-x-4">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-rose-600 transition-colors duration-300 group"
                    >
                        <div className="w-5 h-5 mr-3 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Home className="text-white w-3 h-3" />
                        </div>
                        <span className="font-script text-lg">{cakeBusinessConfig.business.name}</span>
                    </Link>
                </li>

                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <svg
                                className="w-4 h-4 text-rose-400 mx-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors duration-300 relative group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ) : (
                                <span className="text-sm font-medium text-rose-600 relative">
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-500 to-amber-500"></span>
                                </span>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}