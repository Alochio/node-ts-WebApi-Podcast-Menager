import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  response.writeHead(content.statusCode, { "content-type": ContentType.JSON });
  response.write(JSON.stringify(content));
  response.end();
};

export const getFilterEpisodes = async (
  require: IncomingMessage,
  response: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(require.url);

  response.writeHead(content.statusCode, { "content-type": ContentType.JSON });
  response.write(JSON.stringify(content));
  response.end();
};
