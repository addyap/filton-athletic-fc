import concordeMark from '../assets/img/concorde-mark.png'

/**
 * Concorde silhouette, traced from club artwork — a nod to Filton's
 * aviation history, echoing the aircraft on the club crest.
 */
function ConcordeMark({ className }: { className?: string }) {
  return <img src={concordeMark} alt="" aria-hidden="true" className={`${className ?? ''} object-contain`} />
}

export default ConcordeMark
