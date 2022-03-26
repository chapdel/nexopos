@extends( 'layout.dashboard' )

@section( 'layout.dashboard.with-title' )
    <div class="w-full md:w-1/2 ns-box border">

        <div class="box-header p-2 text-center border-b">{{ __( 'Lisense Details' ) }}</div>
        <div class="box-body p-2">

            @php
                $license = App\Models\License::first();
            @endphp
            <table class="table ns-table">
                <thead>
                    <tr class="info">
                        <th class="p-2">{{ __( 'Properties' ) }}</th>
                        <th class="p-2">{{ __( 'Value' ) }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2">{{ __('Name')}}</td>
                        <td class="p-2 text-right">{{ $license->name }}</td>
                    </tr>
                    <tr>
                        <td class="p-2">{{ __('Key')}}</td>
                        <td class="p-2 text-right">{{ $license->license }}</td>
                    </tr>
                    <tr>
                        <td class="p-2">{{ __('Users')}}</td>
                        <td class="p-2 text-right">{{ $license->users }}</td>
                    </tr>
                    <tr>
                        <td class="p-2">{{ __('Account ID')}}</td>
                        <td class="p-2 text-right">{{ $license->company }}</td>
                    </tr>
                    <tr>
                        <td class="p-2">{{ __('Enabled cloud')}}</td>
                        <td class="p-2 text-right">{{ $license->cloud? __('Yes') : __('No') }}</td>
                    </tr>
                    <tr>
                        <td class="p-2">{{ __('Enabled notification')}}</td>
                        <td class="p-2 text-right">{{ $license->notification? __('Yes') : __('No') }}</td>
                    </tr>
                    <tr>
                        <td class="p-2">{{ __('Expires_at')}}</td>
                        <td class="p-2 text-right">{{ $license->expires_at }}</td>
                    </tr>
                </tbody>
            </table>

            <br>
        <div class="box-header p-2 text-center border-b">{{ __( 'Enviroment Details' ) }}</div>
        <div class="box-body p-2">
            <table class="table ns-table">
                <thead>
                    <tr class="info">
                        <th class="p-2">{{ __( 'Properties' ) }}</th>
                        <th class="p-2">{{ __( 'Value' ) }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach( $details as $label => $value )
                    <tr>
                        <td class="p-2">{{ $label }}</td>
                        <td class="p-2 text-right">{{ $value }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>

            <br>

            <table class="table ns-table">
                <thead>
                    <tr class="info">
                        <th class="p-2">{{ __( 'Extensions' ) }}</th>
                        <th class="p-2">{{ __( 'Status' ) }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach( $extensions as $label => $value )
                    <tr class="{{ $value ? 'success' : 'error' }}">
                        <td class="p-2">{{ $label }}</td>
                        <td class="p-2 text-right">{{ $value ? __( 'Yes' ) : __( 'No' ) }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>

            <br>

            <table class="table ns-table">
                <thead>
                    <tr class="info">
                        <th class="p-2">{{ __( 'Configurations' ) }}</th>
                        <th class="p-2">{{ __( 'Status' ) }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach( $configurations as $label => $value )
                    <tr>
                        <td class="p-2">{{ $label }}</td>
                        <td class="p-2 text-right">{{ $value }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection