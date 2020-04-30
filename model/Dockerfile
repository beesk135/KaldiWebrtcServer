FROM danijel3/kaldi-online-tcp
# MAINTAINER Danijel Koržinek <danijel@pja.edu.pl>

COPY model /model

EXPOSE 5050

ENTRYPOINT ["online2-tcp-nnet3-decode-faster","--read-timeout=-1","--samp-freq=16000","--frames-per-chunk=20",\
"--extra-left-context-initial=0","--frame-subsampling-factor=3","--config=/model/model/conf/online.conf","--min-active=200","--max-active=3000",\
"--beam=30","--lattice-beam=10","--acoustic-scale=0.7","--port-num=5050","/model/model/final.mdl","/model/graph/HCLG.fst","/model/graph/words.txt"]