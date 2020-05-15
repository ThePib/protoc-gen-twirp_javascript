package main

import (
	"errors"
	"flag"

	"google.golang.org/protobuf/compiler/protogen"

	"github.com/ThePib/protoc-gen-twirp_javascript/internal/generator"
)

func main() {
	var (
		flags        flag.FlagSet
		pbjsFormat   = flags.String("pbjs_format", "json", "format used in pbjs invocation (json or static-module)")
		twirpVersion = flags.String("twirp_version", "v5", "version of the Twirp protocol to generate code for (v5 or v6)")
	)
	g := &generator.Generator{}
	opts := protogen.Options{
		ParamFunc: flags.Set,
	}
	g.Run(opts, func(gen *protogen.Plugin) error {
		if *pbjsFormat != "json" && *pbjsFormat != "static-module" {
			return errors.New("protoc-gen-twirp_javascript: invalid pbjs format (must be json or static-module)")
		}
		if *twirpVersion != "v5" && *twirpVersion != "v6" {
			return errors.New("protoc-gen-twirp_javascript: invalid Twirp protocol version (must be v5 or v6)")
		}
		for _, f := range gen.Files {
			if f.Generate && len(f.Services) > 0 {
				g.GenerateFile(f, []string{*pbjsFormat, *twirpVersion})
			}
		}
		return nil
	})
}
