using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace PC.PowerApps.Common.Repositories
{
    public static class FileRepository
    {
        public static byte[] Download<TEntity>(Context context, TEntity entity, Expression<Func<TEntity, object>> attributeSelector) where TEntity : Entity
        {
            InitializeFileBlocksDownloadRequest initializeFileBlocksDownloadRequest = new()
            {
                FileAttributeName = Utils.GetAttributeLogicalName(attributeSelector),
                Target = entity.ToEntityReference(),
            };
            InitializeFileBlocksDownloadResponse initializeFileBlocksDownloadResponse = (InitializeFileBlocksDownloadResponse)context.OrganizationService.Execute(initializeFileBlocksDownloadRequest);

            List<byte> file = new List<byte>();
            const int BlockLength = 4 * 1024 * 1024;

            for (int offset = 0; offset < initializeFileBlocksDownloadResponse.FileSizeInBytes; offset += BlockLength)
            {
                DownloadBlockRequest downloadBlockRequest = new()
                {
                    BlockLength = BlockLength,
                    Offset = offset,
                    FileContinuationToken = initializeFileBlocksDownloadResponse.FileContinuationToken,
                };
                DownloadBlockResponse downloadBlockResponse = (DownloadBlockResponse)context.OrganizationService.Execute(downloadBlockRequest);
                file.AddRange(downloadBlockResponse.Data);
            }

            return file.ToArray();
        }

        public static void Delete(Context context, object fileId)
        {
            DeleteFileRequest deleteFileRequest = new()
            {
                FileId = (Guid)fileId,
            };
            _ = context.OrganizationService.Execute(deleteFileRequest);
        }
    }
}
