import './Skeleton.scss'

export interface SkeletonProps {
	style?: {}
}

export const Skeleton = ({ style }: SkeletonProps) => {
	return <div className='bj-skeleton' style={style}></div>
}
