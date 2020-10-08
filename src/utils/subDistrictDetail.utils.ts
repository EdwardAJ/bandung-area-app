export const getIconClassName = (type: string): string => {
    switch (type) {
        case 'Masjid':
            return 'icon-red'
        case 'Vihara':
            return 'icon-yellow'
        case 'Gereja':
            return 'icon-blue'
        case 'Pura':
            return 'icon-orange'
        default:
            return 'icon-black'
    }
}
