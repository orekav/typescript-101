export default null

type VideoPart = Readonly<{
    s3SourceUri: string;
    duration: number;
}>;

type OfferWindow = Readonly<{
    startDateTime: string;
    endDateTime: string;
}>;

type TranscodingOutput = Readonly<{
    jobId: string;
    outputFiles: string[];
    playlistFiles: string[];
}>;

type AssetMetadata = Readonly<{
    id: string;
    providerVersion: number;
    checksum: string;
    videoParts?: VideoPart[];
    offerWindow?: OfferWindow;
    groundTruthLabelingTaskId?: string;
    isEpisodic?: boolean;
    contentLength?: number;
    transcodingOutput?: TranscodingOutput;
    sourceFileLocation?: string;
}>;

type SetTranscodingOutputReponse = {
    setTranscodingOutput: Required<Pick<AssetMetadata, 'id' | 'transcodingOutput'>> 
};
type SetSourceFileLocationReponse = {
    setSourceFileLocation: Required<Pick<AssetMetadata, 'id' | 'sourceFileLocation'>>
};
type SetVideoPartsReponse = {
    setVideoParts: Required<Pick<AssetMetadata, 'id' | 'videoParts'>>
};



type SetWithResponse<OUTPUT extends string, T extends keyof AssetMetadata> = {
    [K in OUTPUT]: Required<Pick<AssetMetadata, T>>
};

type SetTranscodingOutputReponse_v2 = SetWithResponse<'setTranscodingOutput' | 'general', 'id' | 'transcodingOutput'>;
type SetSourceFileLocationReponse_v2 = SetWithResponse<'setSourceFileLocation', 'id' | 'sourceFileLocation'>;
type SetVideoPartsReponse_v2 = SetWithResponse<'setVideoParts', 'id' | 'videoParts'>;